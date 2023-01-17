import uuid from "uuid/v4";

export default class AuthChannel {
  constructor(store) {
    this.store = store;
    this.socket = null;
    this._signedIn = !!this.store.state.credentials.token;
  }

  setSocket = socket => {
    this.socket = socket;
  };

  get email() {
    return this.store.state.credentials.email;
  }

  get signedIn() {
    return this._signedIn;
  }

  signOut = async hubChannel => {
    if (hubChannel) {
      await hubChannel.signOut();
    }
    this.store.update({ credentials: { token: null, email: null, extras: null } });
    await this.store.resetToRandomDefaultAvatar();
    await this.store.resetToRandomName();
    await global.AVNGlobal.deauthenticate()

    this._signedIn = false;
  };

  verifyAuthentication(authTopic, authToken, authPayload, origin) {
    const channel = this.socket.channel(authTopic);
    return new Promise((resolve, reject) => {
      channel.onError(() => {
        channel.leave();
        reject();
      });

      channel
        .join()
        .receive("ok", () => {
          if (origin === "oidc") {
            channel
              .push("auth_verified", { token: authToken, payload: authPayload })
              .receive("ok", resolve)
              .receive("error", reject);
          } else {
            channel.on("auth_credentials", async ({ credentials: token, payload: payload }) => {
              await this.handleAuthCredentials(payload.email, token);
              resolve();
            });
            channel.push("auth_verified", { token: authToken, payload: authPayload });
          }
        })
        .receive("error", reject);
    });
  }

  async startOIDCAuthentication(hubChannel) {
    const channel = this.socket.channel(`oidc:${uuid()}`);
    await new Promise((resolve, reject) =>
      channel
        .join()
        .receive("ok", resolve)
        .receive("error", reject)
    );

    const authorizeUrl = await new Promise((resolve, reject) =>
      channel
        .push("auth_request")
        .receive("ok", function({ authorize_url }) {
          resolve(authorize_url);
        })
        .receive("error", reject)
    );

    window.open(authorizeUrl, "hubs_oidc");

    const authComplete = new Promise(resolve =>
      channel.on("auth_credentials", async ({ user_info, credentials: token }) => {
        // `sub` is the definative user identifier, even though it may not be an email
        await this.handleAuthCredentials(user_info.oidc.sub, token, hubChannel, user_info.oidc);
        resolve();
      })
    );

    // Returning an object with the authComplete promise since we want the caller to wait for the above await but not
    // for authComplete.
    return { authComplete };
  }

  async startAuthentication(email, hubChannel) {
    const channel = this.socket.channel(`auth:${uuid()}`);
    await new Promise((resolve, reject) => channel.join().receive("ok", resolve).receive("error", reject));

    const authComplete = new Promise(resolve =>
      channel.on("auth_credentials", async ({ credentials: token }) => {
        await this.handleAuthCredentials(email, token, hubChannel);
        resolve();
      })
    );

    channel.push("auth_request", { email, origin: "hubs" });

    // Returning an object with the authComplete promise since we want the caller to wait for the above await but not
    // for authComplete.
    return { authComplete };
  }

  async handleAuthCredentials(email, token, hubChannel, extras) {
    if(extras) {
      // AVN: Email is currently unique in ClassConnect and makes a good user-facing ID
      this.store.update({ credentials: { email: extras.email, token, extras } });
      // AVN: Set users display name from OIDC
      this.store.update({ activity: { hasChangedName: true }, profile: { displayName: extras.name } });
      // AVN: Pass through auth token
      if(extras.access_token) {
          await global.AVNGlobal.authenticate(extras.access_token)
      } else {
        console.error("Expected 'access_token' in authentication payload")
      }
    } else {
      this.store.update({ credentials: { email, token, extras } });
      // AVN
      console.error("Expected 'extras' in authentication payload")
    }
    if (hubChannel) {
      await hubChannel.signIn(token);
    }

    this._signedIn = true;
  }
}
