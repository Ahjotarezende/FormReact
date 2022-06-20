import React from 'react'
import {Container, InputField, Label, ErrorMessage} from './input.styled'

const Input = ({id, name, type, placeholder, label, register, errors, onKeyPress}) => {
  if(id==="Age"){
    return (
      <Container id={id}>
        <Label htmlFor={id}>{label}</Label>
        <InputField id={id} type={type} name={name} placeholder={placeholder} {...register(id, {required:  true})} />
        {errors.Age && <ErrorMessage>{id} Invalid</ErrorMessage>}      
      </Container>
      )
    }
  if(id==="Phone"){
    return (
      <Container id={id}>
        <Label htmlFor={id}>{label}</Label>
        <InputField id={id} type={type} onKeyPress={onKeyPress} name={name} placeholder={placeholder} {...register(id, {required:  true})} />
        {errors.Phone && <ErrorMessage>{id} Invalid</ErrorMessage>}      
      </Container>
      )
    }
  if(id==="Fullname"){
    return (
      <Container id={id}>
        <Label htmlFor={id}>{label}</Label>
        <InputField id={id} type={type} name={name} placeholder={placeholder} {...register(id, {required:  true})} />
        {errors.Fullname && <ErrorMessage>{id} Invalid</ErrorMessage>}      
      </Container>
      )
    }
  if(id==="Password"){
  return (
    <Container id={id}>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} name={name} placeholder={placeholder} {...register(id, {required:  true})} />
      {errors.Password && <ErrorMessage>{id} Invalid</ErrorMessage>}      
    </Container>
    )
  }
  if(id==="Email"){
    return (
      <Container id={id}>
        <Label htmlFor={id}>{label}</Label>
        <InputField id={id} type={type} name={name} placeholder={placeholder} {...register(id, {required:  true})} />
        {errors.Email && <ErrorMessage>{id} Invalid</ErrorMessage>}      
      </Container>
      )
    }
}
export default Input ;
