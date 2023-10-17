import React, { useState } from 'react'
import { StyledWrapper } from './Input.style'

const InputControl = ({
    label,
    type,
    id,
    onChange,
    onBlur,
    onFocus,
    required,
    validatePassword,
    disabled,
    backgroundColor,
    width,
}) => {
    const [inputValue, setInputValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleInputChange  = (e) => {
        setInputValue(e.target.value)
        if(typeof validatePassword === "function") {
            validatePassword(e.target.value)
        }
        setErrorMessage("")
        onChange(e)
    }

    const handleInputFocus = (e) => {
        setIsFocused(true)
        onFocus(e)
    }

    const handleInputBlur = (e) => {
        setIsFocused(false)
        if(required && inputValue.trim() === ""){
            setErrorMessage(`${label} is required`)
        } else {
            setErrorMessage("")
        }
        onBlur(e)
    }

  return (
    <StyledWrapper backgroundColor={backgroundColor} width={width} >
        <div className={`form-floating ${isFocused || inputValue ? "active" : ""}`}>
            <input 
            type={type}
            className='form-control'
            id={id}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled}
            />
            <label >
                {label} {required && <span style={{color: "red"}}>*</span>}
            </label>
            {
                errorMessage && <div className='invalid-feedback'>{errorMessage}</div>
            }
        </div>
    </StyledWrapper>
  )
}

export default InputControl