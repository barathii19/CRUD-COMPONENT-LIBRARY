import React from 'react'
import { ButtonWrapper } from './Button.style'

const Button = ({
  height,
  width,
  backgroundColor,
  color,
  size,
  label,
  variant
}) => {
  return (
    <ButtonWrapper>
      <button
              className={['button', `button--${size}`, `button--${variant}`].join(' ')}
              style={backgroundColor && { backgroundColor}}
              color={color}
              height={height}
              width={width}
      >
      {label}
      </button>
    </ButtonWrapper>
  )
}

export default Button