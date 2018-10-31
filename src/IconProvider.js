import React, { Component, Children } from "react"
import PropTypes from 'prop-types'
import { IconContext } from './IconContext'

class IconProvider extends React.Component {
  
  render() {
    const { children, icons } = this.props
    return (
      <IconContext.Provider value={icons}>
        {children}
      </IconContext.Provider>
    )
  }
}

IconProvider.propTypes = {
  icons: PropTypes.object,
  children: PropTypes.object
}

export default IconProvider