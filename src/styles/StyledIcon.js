import styled, { css } from 'styled-components'

const StyledIcon = styled.img(props => css`

  display: ${(props.theme.icons && props.theme.icons.defaultDisplay) || 'flex'};
  width: ${(props.theme.icons && props.theme.icons.defaultSize) || '16px'};
  height: ${(props.theme.icons && props.theme.icons.defaultSize) || '16px'};
  min-width: ${(props.theme.icons && props.theme.icons.defaultSize) || '16px'};

  ${props.mini && css`
    width: ${(props.theme.icons && props.theme.icons.sizeMini) || '8px'};
    height: ${(props.theme.icons && props.theme.icons.sizeMini) || '8px'};
    min-width: ${(props.theme.icons && props.theme.icons.sizeMini) || '8px'};
  `}

  ${props.medium && css`
    width: ${(props.theme.icons && props.theme.icons.sizeMedium) || '24px'};
    height: ${(props.theme.icons && props.theme.icons.sizeMedium) || '24px'};
    min-width: ${(props.theme.icons && props.theme.icons.sizeMedium) || '24px'};
  `}

  ${props.large && css`
    width: ${(props.theme.icons && props.theme.icons.sizeLarge) || '32px'};
    height: ${(props.theme.icons && props.theme.icons.sizeLarge) || '32px'};
    min-width: ${(props.theme.icons && props.theme.icons.sizeLarge) || '32px'};
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
