import React from "react";
import { ButtonRegister, ContainerButton, ButtonSucess} from "./button.styled";

const Button = ({id}) => {
    if(id === "bt1"){
        return(
            <ContainerButton>
                <ButtonRegister>Register</ButtonRegister>
            </ContainerButton>
        )
    }
    else{
        return(
            <ContainerButton>
                <ButtonSucess>Go Back!</ButtonSucess>
            </ContainerButton>
        )
    }
}

export default Button;