import React from 'react'
import {Background, Formulario, Logo, MainTitle} from './styles'
import ImgLogo from '../../assets/logo.png'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'
import CheckBox from '../../Components/checkbox/checkbox'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate();
  return (
    <Background>
        <Logo src={ImgLogo}/>
        <MainTitle>Intern Sign Up</MainTitle>
        <Formulario onSubmit={() => {navigate("/sucess")}}>
            <Input id="Fullname" name='name' type="text" placeholder="Name" label="Full Name *"/>

            <Input id="Email" name="email" type="email" placeholder="foo@bar.com" label="Email *"/>

            <Input id="Password" name="password" type="password" placeholder="Enter your password" label="Password*"/>

            <Input id="Phone" name="phone" type="tel" placeholder="(83) 00000-0000" label="Phone"/>

            <Input id="Age" name="age" type="date" label="Birthday *"/>
            
            <CheckBox id="Check" name="check" type="checkbox"/>

            <Button type="submit" id="bt1"/>
        </Formulario>
    </Background>
  )
}

export default Home