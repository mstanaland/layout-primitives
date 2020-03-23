import React from "react";
import cx from "classnames";

import "./ContentBlock.scss";

export function ContentBlock({
  width,
  className,
  isCentered,
  children,
  ...rest
}) {
  return (
    <div
      className={cx("contentBlock", className, {
        sm: width === "sm",
        lg: width === "lg",
        centered: isCentered
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
