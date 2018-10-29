import React, { Component, Children } from "react"
import PropTypes from 'prop-types'
import IconContext from './IconContext'

class IconProvider extends React.Component {
  
  // you must specify what you’re adding to the context
  static childContextTypes = {
    icons: PropTypes.object.isRequired,
  }

  getChildContext() {
    const { icons } = this.props
    return { icons }
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    const { children } = this.props
    return Children.only(children)
  }
}

export default IconProvider