import React from 'react'
import {Background, Logo, MainTitle} from './styleSucess'
import ImgLogo from '../../assets/logo.png'
import Button from '../../Components/button/button'
import { useNavigate } from 'react-router-dom'

    const Sucess = () => {
        let navigate=useNavigate();
        return(
            <Background>
                <Logo src={ImgLogo}/>
                <MainTitle>Sucess!</MainTitle>
                <Button onClick={() => {navigate("/")}} id="bt2"/>
            </Background>
        )
    }

export default Sucess