import React, { Component, Children } from "react"
import PropTypes from 'prop-types'
import IconContext from './IconContext'

class IconProvider extends React.Component {
  render() {
    return (
      <IconContext.Provider value={this.props.icons}>
        {this.props.children}
      </IconContext.Provider>
    )
  }
}

export default IconProvider