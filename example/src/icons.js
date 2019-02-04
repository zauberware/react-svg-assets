import Arrow from './assets/arrow.svg'

export default (_icon) => {
  const icons = {
    'default': Arrow,
    'arrow': Arrow
  }
  return _icon ? icons[_icon] : icons
}
