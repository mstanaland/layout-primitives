import React from "react";
import cx from "classnames";

import "./Frame.scss";

export function Frame({
  aspectRatio = "16:9",
  children,
  objectPosition,
  scale,
  className,
  ...rest
}) {
  const [d, n] = aspectRatio.split(":");
  const style = {
    paddingBottom: `calc(${n} / ${d} * 100%)`
  };
  const childStyle = {};
  const hasChildStyling = !!objectPosition || !!scale;

  if (!!objectPosition) {
    childStyle.objectPosition = objectPosition;
  }

  if (!!scale) {
    childStyle.transform = `scale(${scale})`;
  }

  const childrenWithProps = hasChildStyling
    ? React.Children.map(children, child =>
        React.cloneElement(child, { style: childStyle })
      )
    : children;

  return (
    <div className={cx("frame", className)} style={style} {...rest}>
      {childrenWithProps}
    </div>
  );
}
