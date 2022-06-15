import React from 'react'
import {Container, InputField, Label} from './input.styled'

const Input = ({id, type, placeholder, label}) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} placeholder={placeholder}/>
    </Container> 
  )
}

export default Input