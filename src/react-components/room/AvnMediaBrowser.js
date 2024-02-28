import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AvnMediaBrowser.scss";
import { ReactComponent as SearchIcon } from "../icons/Search.svg";
import { ReactComponent as CloseIcon } from "../icons/Close.svg";
import { ReactComponent as ArrowForwardIcon } from "../icons/ArrowForward.svg";
import { ReactComponent as ArrowBackIcon } from "../icons/ArrowBack.svg";
import { ReactComponent as HomeIcon } from "../icons/Home.svg";
import { FormattedMessage, defineMessages, useIntl } from "react-intl";
import { TextInputField } from "../input/TextInputField";
import { IconButton } from "../input/IconButton";
import { FullscreenLayout } from "../layout/FullscreenLayout";
import { Button } from "../input/Button";
import { Column } from "../layout/Column";
import { MediaGrid } from "./MediaGrid";
import { AVN } from "../../avn-bridge";

export function AvnMediaBrowser({
  onClose,
  browserRef,
  searchInputRef,
  autoFocusSearch,
  searchPlaceholder,
  onSearchKeyDown,
  onClearSearch,
  channelList,
  selectedChannelId,
  onSelectChannel,
  profileList,
  selectedProfileId,
  onSelectProfile,
  categoryList,
  selectedCategoryId,
  onSelectCategory,
  query,
  onChangeQuery,
  hasNext,
  hasPrevious,
  onNextPage,
  onPreviousPage,
  noResultsMessage,
  children
}) {
  const intl = useIntl();
  return (
    <FullscreenLayout
      headerLeft={
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      }
      headerCenter={
          <TextInputField
            value={query}
            onChange={onChangeQuery}
            autoFocus={autoFocusSearch}
            ref={searchInputRef}
            placeholder={searchPlaceholder}
            onKeyDown={onSearchKeyDown}
            beforeInput={<SearchIcon className={styles.searchIcon} />}
            afterInput={
              <IconButton onClick={onClearSearch}>
                <CloseIcon height={16} width={16} />
              </IconButton>
            }
          />
        }
      headerRight={
        <IconButton onClick={() => {
          AVN.goHome();
          onClose();
        }}>
          <HomeIcon />
        </IconButton>
      }
    >
      {/* Channels */}
      <div className={styles.buttonNav}>
        {channelList?.map(channel => (
          <Button
            sm
            key={channel.entityId}
            preset={selectedChannelId === channel.entityId ? "primary" : "transparent"}
            onClick={() => onSelectChannel(channel.entityId)}
          >
            {channel.name}
          </Button>
        ))}
      </div>
      {/* Profiles */}
      <div className={classNames(styles.buttonNav, styles.facetsNav)}>
        {profileList?.map((profile, i) => (
          <Button
            sm
            key={profile.entityId}
            preset={selectedProfileId === profile.entityId ? "primary" : "transparent"}
            onClick={() => onSelectProfile(profile.entityId)}
          >
            {profile.name}
          </Button>
        ))}
      </div>
      {/* Categories */}
      <div className={classNames(styles.buttonNav, styles.facetsNav)}>
        {categoryList?.map((category, i) => (
          <Button
            sm
            key={category.entityId}
            preset={selectedCategoryId === category.entityId ? "primary" : "transparent"}
            onClick={() => onSelectCategory(category.entityId)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className={styles.content}>
        <Column grow ref={browserRef}>
          {children ? (
            <MediaGrid
              isVariableWidth={true}
              sm={false}
            >
              {children}
            </MediaGrid>
          ) : (
            <div className={styles.noResults}>{noResultsMessage}</div>
          )}
          {(hasNext || hasPrevious) && (
            <div className={styles.pager}>
              <button type="button" className={styles.pagerButton} disabled={!hasPrevious} onClick={onPreviousPage}>
                <ArrowBackIcon />
              </button>
              <button type="button" className={styles.pagerButton} disabled={!hasNext} onClick={onNextPage}>
                <ArrowForwardIcon />
              </button>
            </div>
          )}
        </Column>
      </div>
    </FullscreenLayout>
  );
}

AvnMediaBrowser.propTypes = {
  onClose: PropTypes.func,
  browserRef: PropTypes.any,
  searchInputRef: PropTypes.any,
  autoFocusSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  onSearchKeyDown: PropTypes.func,
  onClearSearch: PropTypes.func,
  channelList: PropTypes.array,
  selectedChannelId: PropTypes.number,
  onSelectChannel: PropTypes.func,
  profileList: PropTypes.array,
  selectedProfileId: PropTypes.number,
  onSelectProfile: PropTypes.func,
  categoryList: PropTypes.array,
  selectedCategoryId: PropTypes.number,
  onSelectCategory: PropTypes.func,
  query: PropTypes.string,
  onChangeQuery: PropTypes.func,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  noResultsMessage: PropTypes.node,
  children: PropTypes.node
};

AvnMediaBrowser.defaultProps = {
  noResultsMessage: "No Results"
};
