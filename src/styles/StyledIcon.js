import styled, { css } from 'styled-components'

const StyledIcon = styled.img(props => css`
  display: ${props.theme.defaultDisplay};
  width: ${props.theme.defaultSize};
  height: ${props.theme.defaultSize};
  min-width: ${props.theme.defaultSize};

  ${props.mini && css`
    width: ${props.theme.sizeMini};
    height: ${props.theme.sizeMini};
    min-width: ${props.theme.sizeMini};
  `}

  ${props.medium && css`
    width: ${props.theme.sizeMedium};
    height: ${props.theme.sizeMedium};
    min-width: ${props.theme.sizeMedium};
  `}

  ${props.large && css`
    width: ${props.theme.sizeLarge};
    height: ${props.theme.sizeLarge};
    min-width: ${props.theme.sizeLarge};
  `}
  
  ${props.clickable && css`
    cursor: pointer;
  `}
  
  ${props => props.padding && css`
    padding: ${props.padding}; 
  `}
  
  ${props => props.rotate && css`
    transform: rotate(${props.rotate}deg);
  `}
`)

export default StyledIcon
