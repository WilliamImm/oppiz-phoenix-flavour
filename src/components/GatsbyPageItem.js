// Modified clone of PageItem from react-bootstrap
// Used to work around react-bootstrap's PageItem's avoidance of Gatsby links
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import SafeAnchor from "react-bootstrap/SafeAnchor"

const propTypes = {
  /** Disables the PageItem */
  disabled: PropTypes.bool,

  /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */
  active: PropTypes.bool,

  /** An accessible label indicating the active state.. */
  activeLabel: PropTypes.string,
}

const defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)',
}

export default function GatsbyPageItem({
  active,
  disabled,
  className,
  style,
  activeLabel,
  to,
  children,
  ...props
}) {
  let Component;
  if (active || disabled) {
    Component = 'span'
  } else if (!to) {
    Component = SafeAnchor
  } else {
    Component = Link
  }
  return (
    <li
      style={style}
      className={classNames(className, 'page-item', { active, disabled })}
    >
      <Component className="page-link" disabled={disabled} to={to} {...props}>
        {children}
        {active && activeLabel && (
          <span className="sr-only">{activeLabel}</span>
        )}
      </Component>
    </li>
  )
}

GatsbyPageItem.propTypes = propTypes
GatsbyPageItem.defaultProps = defaultProps
