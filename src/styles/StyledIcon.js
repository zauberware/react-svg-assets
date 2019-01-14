import styled, { css } from 'styled-components'

const StyledIcon = styled.img(props => css`
  display: ${props.theme.defaultDisplay};
  width: 16px;
  height: 16px;
  min-width: 16px;

  ${props.padding && css`
    padding: ${props.theme.spacingSmall}; 
  `}

  ${props.clickable && css`
    cursor: pointer;
  `}

  ${props => props.rotate && css`
    transform: rotate(${props.rotate}deg);
  `}
`)

export default StyledIcon
