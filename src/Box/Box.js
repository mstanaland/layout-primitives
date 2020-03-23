import React from "react";
import cx from "classnames";

import "./Box.scss";

export function Box({
  children,
  padding = "md",
  hasBorder,
  shadow,
  className,
  ...rest
}) {
  return (
    <div
      className={cx(
        "box",
        padding ? `padding-${padding}` : null,
        shadow ? `shadow-${shadow}` : null,
        className,
        {
          hasBorder: hasBorder
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
