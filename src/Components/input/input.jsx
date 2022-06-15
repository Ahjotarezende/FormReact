import React from 'react'
import {Container, InputField, Label, ErrorMessage} from './input.styled'

const Input = ({id, type, placeholder, label, name}) => {
  return (
    <Container id={name}>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} placeholder={placeholder}/>
      <ErrorMessage>{id} Invalid</ErrorMessage>
    </Container> 
  )
}

export default Input