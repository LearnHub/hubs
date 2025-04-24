import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AvnMediaTiles.scss";

function BaseTile({ as: TileComponent, className, name, description, tall, wide, children, ...rest }) {
  let additionalProps;

  if (TileComponent === "div") {
    additionalProps = {
      tabIndex: "0",
      role: "button"
    };
  }

  return (
    <TileComponent
      className={classNames(styles.mediaTile, { [styles.tall]: tall, [styles.wide]: wide }, className)}
      {...additionalProps}
      {...rest}
    >
      <div className={styles.thumbnailContainer}>{children}</div>
      {(name || description) && (
        <div className={styles.info}>
          <b>{name}</b>
          {description && <small className={styles.description}>{description}</small>}
        </div>
      )}
    </TileComponent>
  );
}

BaseTile.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.node,
  children: PropTypes.node,
  tall: PropTypes.bool,
  wide: PropTypes.bool
};

BaseTile.defaultProps = {
  as: "div"
};

export function AvnMediaTile({ entry, onClick, ...rest }) {
  return (
    <BaseTile
      wide={true}
      tall={false}
      name={entry.name.text}
      className={entry.available ? "" : styles.notAvailable}
      //TODO item metadata such as tags
      description={<></>}
      {...rest}
    >
      <a className={styles.thumbnailLink} href={entry.url} rel="noreferrer noopener" onClick={onClick}>
        <img src={entry.previewUrl || entry.iconUrl} alt={entry.name.text} loading="lazy" crossOrigin="anonymous"/>
      </a>
    </BaseTile>
  );
}

AvnMediaTile.propTypes = {
  entry: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
