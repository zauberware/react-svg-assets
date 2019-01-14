import React from 'react'
import { defaultIcon } from '../assets/icon.svg'

export const icons = (_icon) => {
  const icons = {
    'default': defaultIcon
  }
  return _icon ? icons[_icon] : icons
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