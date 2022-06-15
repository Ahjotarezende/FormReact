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
            <Input id="Fullname" type="text" placeholder="Name" label="Full Name *"/>

            <Input id="Email" type="email" placeholder="foo@bar.com" label="Email *"/>

            <Input id="Password" type="password" placeholder="Enter your password" label="Password*"/>

            <Input id="Phone" type="tel" placeholder="(83) 00000-0000" label="Phone"/>

            <Input id="Age" type="date" label="Birthday *"/>
        </Formulario>
    </Background>
  )
}

export default Home