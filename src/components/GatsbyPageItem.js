// Modified clone of PageItem from react-bootstrap
// Used to work around react-bootstrap's PageItem's avoidance of Gatsby links
import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

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
  children,
  ...props
}) {
  const Component = active || disabled ? 'span' : Link
  return (
    <li
      style={style}
      className={classNames(className, 'page-item', { active, disabled })}
    >
      <Component className="page-link" disabled={disabled} {...props}>
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
