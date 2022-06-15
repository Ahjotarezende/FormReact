import React from 'react'
import {Background, Logo, MainTitle} from '../styleSucess'
import ImgLogo from '../assets/logo.png'
import Button from '../Components/button/button'

    const Sucess = () => {
        return(
            <Background>
                <Logo src={ImgLogo}/>
                <MainTitle>Sucess!</MainTitle>
                <Button id="bt2"/>
            </Background>
        )
    }

export default Sucess