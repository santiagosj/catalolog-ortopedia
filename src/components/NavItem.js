import React from 'react'
import {Link} from 'gatsby'

import './NavItem.css'

export default ({className,children, ...props}) => (
    <Link {...props} className={`NavLink ${className || ''}`}>
      {children}
    </Link>
)