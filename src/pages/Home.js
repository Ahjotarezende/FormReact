import React from 'react'
import {Background, Formulario, Logo, MainTitle, ErrorMessage} from '../styles'
import ImgLogo from '../assets/logo.png'
import Input from '../Components/input/input'

const Home = () => {
  return (
    <Background>
        <Logo src={ImgLogo}/>
        <MainTitle>Intern Sign Up</MainTitle>
        <Formulario>
            <Input id="name" type="text" placeholder="Name" label="Full Name *"/>
            <ErrorMessage>Fullname Invalid</ErrorMessage>
        </Formulario>
    </Background>
  )
}

export default Home