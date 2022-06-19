import React from 'react'
import {Container, InputField, Label, ErrorMessage} from './input.styled'

const Input = ({id, type, placeholder, label, name, register}) => {
  return (
    <Container id={name}>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} placeholder={placeholder} {...register(name, {required:  true})} />
      <ErrorMessage>{id} Invalid</ErrorMessage>
    </Container> 
  )
}

export default Input