import React from 'react'
import {Background, Formulario, Logo, MainTitle} from './styles'
import ImgLogo from '../../assets/logo.png'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'
import CheckBox from '../../Components/checkbox/checkbox'
import { useNavigate } from 'react-router-dom'
import { useForm } from  "react-hook-form";

const Home = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm();
  let navigate=useNavigate();

  const  loginUser  =  data  => {
    console.log(data);
    navigate("/sucess")
  }

  return (
    <Background>
        <Logo src={ImgLogo}/>
        <MainTitle>Intern Sign Up</MainTitle>
        <Formulario onSubmit={handleSubmit(loginUser)}>
            <Input id="Fullname" name='name' type="text" placeholder="Name" label="Full Name *" register={register}/>

            <Input id="Email" name="email" type="email" placeholder="foo@bar.com" label="Email *" register={register}/>

            <Input id="Password" name="password" type="password" placeholder="Enter your password" label="Password*" register={register}/>

            <Input id="Phone" name="phone" type="tel" placeholder="(83) 00000-0000" label="Phone" register={register}/>

            <Input id="Age" name="age" type="date" label="Birthday *" register={register}/>
            
            <CheckBox id="Check" name="check" type="checkbox" register={register}/>

            <Button type="submit" id="bt1"/>
        </Formulario>
    </Background>
  )
}

export default Home