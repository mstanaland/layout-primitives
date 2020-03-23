import React from "react";
import cx from "classnames";

import "./Stack.scss";

export function Stack({
  children,
  space = "md",
  hasListRole,
  className,
  ...rest
}) {
  return (
    <div
      data-component={`Stack Stack-${space}`}
      role={hasListRole ? "list" : null}
      className={cx("stack", space, className)}
      {...rest}
    >
      {hasListRole
        ? React.Children.map(children, child => {
            return React.cloneElement(child, {
              role: "listitem"
            });
          })
        : children}
    </div>
  );
}
