import React from 'react'

const defaultContext = {
  icons: {
    'close': 'M13.7.3c-.4-.4-1-.4-1.4 0L7 5.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L5.6 7 .3 12.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L7 8.4l5.3 5.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L8.4 7l5.3-5.3c.4-.4.4-1 0-1.4z',
  } 
}
const IconContext = React.createContext(defaultContext)

export default IconContext 