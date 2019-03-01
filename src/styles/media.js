import { css } from 'styled-components'

const sizes = {
  sm: 600,
  md: 900,
  lg: 1200
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc
}, {})