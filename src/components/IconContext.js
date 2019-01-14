import React from 'react'
import defaultIcon from '../assets/letter-z.svg'

export const icons = (icon) => {
  const icons = {
    default: defaultIcon
  }
  return icon ? icons[icon] : icons
}

export const IconContext = React.createContext(
  icons // default icons
)

export const withIcons = Component =>
  class WithIcons extends React.Component {
    render() {
      return (
        <IconContext.Consumer>
          {icons => <Component { ...this.props } icons={icons} />}
        </IconContext.Consumer>
      );
    }
  }