import React from 'react'
import {Background, Logo, MainTitle} from '../styles'
import ImgLogo from '../assets/logo.png'
import Input from '../Components/input/input'

const Home = () => {
  return (
    <Background>
        <Logo src={ImgLogo}/>
        <MainTitle>Intern Sign Up</MainTitle>
    </Background>
  )
}

export default Home