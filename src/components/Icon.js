import React, { Fragment } from "react"
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'
import { withIcons } from './IconContext'
import defaultTheme from '../styles/theme' 
import StyledIcon from '../styles/StyledIcon'

class Icon extends React.Component {
  state = {
    iconsAsFunction: false,
    theme: defaultTheme
  }

  componentDidMount (){
    const {
      icons,
      theme,
    } = this.props

    if (isFunction(icons)){
      this.setState({ iconsAsFunction: true })
    }
    if (theme){
      this.setState({ theme: theme })
    }
  }

  render() {
    const { icon, icons } = this.props
    const { iconsAsFunction, theme } = this.state
    console.log(theme)
    return (
      <Fragment>
        {iconsAsFunction &&
          <StyledIcon src={icons(icon)} theme={theme} {...this.props}/>
        }
      </Fragment>
    )
  }
}

Icon.propTypes = {
  icons: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
}

export default withIcons(Icon)
