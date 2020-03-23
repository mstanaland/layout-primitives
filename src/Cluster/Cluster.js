import React from "react";
import cx from "classnames";

import "./Cluster.scss";

export function Cluster({
  children,
  margin = "md",
  align = "center",
  justify = "left",
  shouldRenderInnerContainer = true,
  className,
  ...rest
}) {
  return (
    <div
      className={cx(
        "cluster",
        margin ? `margin-${margin}` : null,
        {
          top: align === "top",
          alignCenter: align === "center",
          bottom: align === "bottom",
          left: justify === "left",
          right: justify === "right",
          justifyCenter: justify === "center"
        },
        className
      )}
      {...rest}
    >
      {shouldRenderInnerContainer ? <div>{children}</div> : { children }}
    </div>
  );
}
