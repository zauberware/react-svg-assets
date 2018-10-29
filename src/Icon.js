import React from "react"
import IconContext from './IconContext'

class Icon extends React.Component {
  render() {
    const { width, color, icon } = this.props
    const { icons } = this.context
    console.log(icons)
    return (
      <div>
        <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`} fill={color}>
          <path d={icons[icon]}></path>
        </svg>
      </div>
    )
  }
}

Icon.contextType = IconContext

export default Icon
