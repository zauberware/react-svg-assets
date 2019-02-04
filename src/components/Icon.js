import React, { Fragment } from "react"
import PropTypes from 'prop-types'
import { withIcons } from './IconContext'
import StyledIcon from '../styles/StyledIcon'

class Icon extends React.Component {

  render() {
    const { icon, icons } = this.props

    return (
      <Fragment>
        <StyledIcon src={icons(icon)} {...this.props}/>
      </Fragment>
    )
  }
}

Icon.propTypes = {
  icons: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
}

export default withIcons(Icon)
