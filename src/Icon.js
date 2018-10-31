import React from "react"
import PropTypes from 'prop-types'
import { IconContext } from './IconContext'

class Icon extends React.Component {
  render() {
    const { width, height, color, icon, viewBox } = this.props
    return (
      <IconContext.Consumer>
        {(icons) => (
          <svg 
            width={width} 
            height={height} 
            viewBox={viewBox} 
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d={icons[icon]}></path>
          </svg>
        )}
      </IconContext.Consumer>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  viewBox: PropTypes.string,
}

export default Icon
