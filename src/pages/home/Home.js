import React from 'react'
import {Background, Formulario, Logo, MainTitle} from './styles'
import ImgLogo from '../../assets/logo.png'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'
import CheckBox from '../../Components/checkbox/checkbox'
import { useNavigate } from 'react-router-dom'
import { useForm } from  "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { emailRegex, nameRegex } from '../../untils/Regex'
import { maskPhone } from '../../untils/maskPhone'
import * as yup from "yup";

const schema = yup.object({
  Fullname: yup.string().required().min(4).matches(nameRegex),
  Age: yup.date().required().min("1901-06-20"),
  Email: yup.string().email().required().matches(emailRegex),
  Password: yup.number().required().min(99999).max(99999999),
  Phone: yup.string().required().matches(/^([(][0-9]{2}[)]) ([0-9]{5})-([0-9]{4})/),
  Check: yup.boolean().isTrue(),
}).required();

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } =  useForm({
    resolver: yupResolver(schema)
  });
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
            <Input id="Fullname" name='name' type="text" placeholder="Name" label="Full Name *" register={register} errors={errors}/>

            <Input id="Email" name="email" type="email" placeholder="foo@bar.com" label="Email *" register={register} errors={errors}/>

            <Input id="Password" name="password" type="password" placeholder="Enter your password" label="Password*" register={register} errors={errors}/>

            <Input id="Phone" name="phone" onKeyPress={e => maskPhone(e)} type="tel" placeholder="(83) 00000-0000" label="Phone" register={register} errors={errors}/>

            <Input id="Age" name="age" type="date" label="Birthday *" register={register} errors={errors}/>
            
            <CheckBox id="Check" name="check" type="checkbox" register={register} errors={errors}/>

            <Button type="submit" id="bt1"/>
        </Formulario>
    </Background>
  )
}

export default Home