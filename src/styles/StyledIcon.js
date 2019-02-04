import styled, { css } from 'styled-components'

const defaultSizes = ['14px', '18px', '24px', '32px']

const StyledIcon = styled.img(props => css`

  ${ console.log(props.theme)}
  ${ props => console.log(props.theme)}

  display: ${(props.theme.icons && props.theme.icons.display) || 'flex'};

  width: ${props.theme.icons && props.theme.icons.sizes[0] || defaultSizes[0]};
  height: ${props.theme.icons && props.theme.icons.sizes[0] || defaultSizes[0]};
  min-width: ${props.theme.icons && props.theme.icons.sizes[0] || defaultSizes[0]};
  
  ${props.size && css`
    width: ${props.theme.icons && props.theme.icons.sizes[props.size] || defaultSizes[props.size]};
    height: ${props.theme.icons && props.theme.icons.sizes[props.size] || defaultSizes[props.size]};
    min-width: ${props.theme.icons && props.theme.icons.sizes[props.size] || defaultSizes[props.size]};
  `}

  ${props.padding && css`
    padding: ${props.padding}; 
  `}
  
  ${props.rotate && css`
    transform: rotate(${props.rotate}deg);
  `}
`)

export default StyledIcon
