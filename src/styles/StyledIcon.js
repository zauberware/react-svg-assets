import styled, { css } from 'styled-components'

const iconSizes = ['14px', '18px', '24px', '32px']

const iconSizeStyling = (props, level) => {
  let width, height, minWidth

  // use theme or from default iconSizes
  if (props.theme && props.theme.icons && props.theme.icons.sizes){
    width = props.theme.icons.sizes[level] || iconSizes[level] // fallback when level was npt found in theme
    height = props.theme.icons.sizes[level] || iconSizes[level]
    minWidth = props.theme.icons.sizes[level] || iconSizes[level]
  }else{
    width = iconSizes[level]
    height = iconSizes[level]
    minWidth = iconSizes[level]
  }

  if(props.width){
    width = props.width
  }

  if(props.height){
    height = props.height
  }

  if(props.minWidth){
    minWidth = props.minWidth
  }

  return css`
    width: ${width};
    height: ${height};
    min-width: ${minWidth};
  `
}

const StyledIcon = styled.img(props => css`

  display: ${(props.theme.icons && props.theme.icons.display) || 'flex'};

  ${iconSizeStyling(props, 1)}

  ${props.mini && css`
    ${iconSizeStyling(props, 0)}
  `}

  ${props.medium && css`
    ${iconSizeStyling(props, 2)}
  `}

  ${props.large && css`
    ${iconSizeStyling(props, 3)}
  `}

  ${(props.size || props.size == 0) && css`
    ${iconSizeStyling(props, props.size)}
  `}

  ${props.padding && css`
    padding: ${props.padding}; 
  `}
  
  ${props.rotate && css`
    transform: rotate(${props.rotate}deg);
  `}
`)


export default StyledIcon
