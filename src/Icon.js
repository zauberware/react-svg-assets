import React from "react"
import IconContext from './IconContext'

class Icon extends React.Component {
  render() {
    const { width, color, icon } = this.props
    const { icons } = this.context
    console.log(icons)
    console.log(this.props)
    return (
      <div>  
        svgOut
        <IconContext.Consumer>
          {({ icons }) => (
            <svg width={width} height={width} viewBox="0 0 1024 1024">
              <path d={icons[icon]}></path>
            </svg>
          )}
        </IconContext.Consumer>
      </div>
    )
  }
}

Icon.contextType = IconContext

export default Icon
