import React from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvnAccountContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import { InputField } from "../input/InputField";
import { AVN } from "../../avn-bridge";

export function AvnAccountContent({
  displayName,
  displayNameInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  avatarPreview,
  displayNamePattern,
  onChangeAvatar,
  avnShowInformationDialog,
  avnDimensionConnection,
  ...rest
}) {
  const [joinErrorText, setJoinErrorText] = React.useState(undefined);

  // Probably not best react practice but async functions are hard
  const [orgRoles, setOrgRoles] = React.useState(undefined);
  if(orgRoles) {
    // Reset if connection was lost
    if(orgRoles.length && !avnDimensionConnection) {
      setOrgRoles([]);
    }
  } else {
    setOrgRoles([]);
    AVNGlobal.getUserOrganizations().then(value => {
      setOrgRoles(value.sort((lhs, rhs) => lhs.organization.name.localeCompare(rhs.organization.name)));
    });
  }

  const [userLicenses, setUserLicenses] = React.useState(undefined);
  if(userLicenses) {
    // Reset if connection was lost
    if(userLicenses.length &&!avnDimensionConnection) {
      setUserLicenses([]);
    }
  } else {
    setUserLicenses([]);
    AVNGlobal.getUserLicenses().then(value => {
      setUserLicenses(value);
    });
  }

  const isAuthenticated = global?.AVNGlobal?.isAuthenticated === true

  const onInviteInvoked = (org)  => {
    const inviteText = `You are invited to join '${org.name}' in Eduverse with this join code: ${org.enrollmentSecret} \n\nTo find out more, please see these instructions: ${global?.AVNGlobal?.supportLink}`;
    navigator.clipboard.writeText(inviteText);
    avnShowInformationDialog("org-invite");
  };

  const joinInputEl = React.createRef();

  const onJoinSubmit = (e) => {
    e.preventDefault();
    const joinCode = joinInputEl.current.value
    AVNGlobal.joinOrganization(joinCode).then(() => {
      console.info("AVN: joinOrganization succeeded")
      // Reset input because user shouldn't try and join again
      joinInputEl.current.value = ""
      // Reset org roles to force refresh
      setOrgRoles(undefined)
    }).catch(reason => {
      console.warn("AVN: joinOrganization failed", reason)
      setJoinErrorText(reason?.message || reason.toString())
    })
  };

  return (
    <Column className={styles.content} {...rest}>

      <InputField
          label={<FormattedMessage id="avn-account-content.name-label" defaultMessage="Name" />}
          fullWidth={true}
        >
        <div>{displayName}</div>
      </InputField>

      {avnDimensionConnection?.user?.email &&
      (<InputField
          label="Email"
          fullWidth={true}
        >
        <div>{avnDimensionConnection?.user?.email}</div>
      </InputField>)}

      <div className={styles.avatarPreviewContainer}>
        {avatarPreview || <div />}
        <Button type="button" preset="basic" onClick={e => {
            if(isAuthenticated) {
              onChangeAvatar(e);
            } else {
              avnShowInformationDialog("signin");
            }
          }
        }>
          <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
        </Button>
      </div>

      { isAuthenticated && (<>
        
        {/* Licenses */}
        <InputField
          label={<FormattedMessage id="avn-account-content.licenses-label" defaultMessage="Licenses" />}
          fullWidth={true}>
        {
        userLicenses?.length ? (<>
          {userLicenses.map(userLicense => (
            <table className={styles.avnLicenseTable} key={userLicense.licenseId}>
              <tbody>
                <tr><td>License ID</td><td>#{userLicense.licenseId}</td></tr>
                {userLicense.organization && <tr><td>Organization</td><td>{userLicense.organization.name}</td></tr>}
                <tr><td>Expires</td><td>{userLicense.expires.toLocaleDateString(undefined, { dateStyle: 'medium' })}</td></tr>
                {userLicense.planCodes && userLicense.planCodes.length > 0 && <tr><td>Plan Codes</td><td>{userLicense.planCodes.join("\n")}</td></tr>}
              </tbody>
            </table>))}
            <p>
              <a href={AVN.manageSubscriptionsLink} target="_blank" rel="noopener noreferrer">
                <FormattedMessage id="avn-information-modal.subscription-management-anchor-text" defaultMessage="Manage subscriptions" />
              </a>
            </p>
          </>  
        )
        : <>
          <p>
            <FormattedMessage id="avn-account-content.no-licenses" defaultMessage="You have no licenses available" />
          </p>
          <p>
            <a href={AVN.newSubscriptionLink} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="avn-information-modal.subscription-call-to-action-anchor-text" defaultMessage="Subscribe today" />
            </a>
          </p>
        </> 
        }  
        
        </InputField>

        {/* Organizations */}
        <InputField
          label={<FormattedMessage id="avn-account-content.organizations-label" defaultMessage="Organizations" />}
          fullWidth={true}>
        { 
        orgRoles?.length ? (<table><tbody>
            {orgRoles.map(orgRole => (<tr key={`${orgRole.organization.organizationId}-${orgRole.role.roleId}`}>
              <td className={styles.avnOrgName}>{orgRole.organization.name}</td>
              {/* <td className={styles.avnOrgRole}>{orgRole.role.name}</td> */}
              <td className={styles.avnOrgAction}>
                { orgRole.organization.enrollmentSecret && (
                  <a href="#" onClick={() => onInviteInvoked(orgRole.organization)}>
                    <FormattedMessage id="avn-account-content.invite-button" defaultMessage="Invite" />
                  </a>
                )}
              </td>
            </tr>))}  
            </tbody></table>)
        : <p>
            <FormattedMessage id="avn-account-content.no-organizations" defaultMessage="You are not a member of any organizations" />
          </p>
        }
        </InputField>

        <form onSubmit={onJoinSubmit.bind(this)}>
        <TextInputField
          className={styles.avnJoinSection}
          fullWidth={true}
          autoComplete="off"
          onChange={() => setJoinErrorText(undefined) }
          ref={joinInputEl}      
          placeholder="Enter an organization join code"
          afterInput={
            <Button preset="accept" type="submit">
              <FormattedMessage id="avn-account-content.join-button" defaultMessage="Join" />
            </Button>
          }
        />
        </form>
        
        { joinErrorText && <p className={styles.avnJoinError}>{joinErrorText}</p> }

      </>)}

      {/* <h3>Licenses?</h3> */}


    </Column>
  );
}

AvnAccountContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  avatarPreview: PropTypes.node,
  avnShowInformationDialog: PropTypes.func,
  onChangeAvatar: PropTypes.func,
  avnDimensionConnection: PropTypes.object,
};
