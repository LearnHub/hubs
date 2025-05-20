import configs from "./configs";
import { createIntl, createIntlCache } from "react-intl";

export function canShare() {
  return "function" === typeof navigator.share;
}

export function share(opts) {
  if (canShare()) {
    return navigator.share(opts);
  } else {
  }
}

export async function shareInviteUrl(intl, url, values = {}, inEnglish = false, event) {
  try {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    if (inEnglish) {
      const cache = createIntlCache(); // prevents memory leak
      intl = createIntl({ locale: "en", messages: {} }, cache);
    }
    const title = intl.formatMessage(
      {
        id: "invite-popover.share-title",
        defaultMessage: "You're invited to join room “{roomName}” on {appName}"
      },
      values
    );
    // What this is + what you can do here
    const text =
      intl.formatMessage(
        {
          id: "invite-popover.what-this-is",
          defaultMessage: "{appName} is an immersive 3D space you can access on any device."
        },
        values
      ) +
      " " +
      configs.translation("app-description");
    const data = { title, text, url };
    console.info(`attempting to share:`, data);
    await share(data);
    return true;
  } catch (error) {
    console.error("unable to share:", error);
    return false;
  }
}
