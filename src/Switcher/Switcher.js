import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { standardSpaceSizes } from "../constants";

import "./Switcher.scss";

/**
 * Children are displayed horizontally if the parent container's width
 * is larger than the given threshold and vertically if it is
 * smaller than the threshold.
 *
 * Essentially, a media query breakpoint that breaks not at a screen
 * width, but at an arbitrary size
 */
export function Switcher({
  threshold = "40rem",
  margin = "md",
  tag = "div",
  children
}) {
  const Tag = tag;
  const style = {
    flexBasis: `calc((${threshold} - (100% - ${standardSpaceSizes[margin]})) * 999)`
  };

  return (
    <div className={cx("switcher", margin ? `margin-${margin}` : null)}>
      <Tag>
        {React.Children.map(children, child =>
          React.cloneElement(child, { style })
        )}
      </Tag>
    </div>
  );
}

Switcher.propTypes = {
  /** A valid CSS value representing a width. ex '10rem' or '450px' */
  threshold: PropTypes.string,

  /** The amount of space between the children. Uses standard space sizes */
  margin: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),

  /** A valid html tag, such as 'div' or 'ul'. Used to render the inner
   * container (the direct parent of the children) */
  tag: PropTypes.string,

  /** Children affected by the layout primitive */
  children: PropTypes.node
};
