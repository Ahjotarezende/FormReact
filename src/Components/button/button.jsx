import React from "react";
import { ButtonRegister, ContainerButton, ButtonSucess} from "./button.styled";

const Button = (props) => {
    if(props.id === "bt1"){
        return(
            <ContainerButton>
                <ButtonRegister>Register</ButtonRegister>
            </ContainerButton>
        )
    }
    else{
        return(
            <ContainerButton>
                <ButtonSucess onClick={props.onClick} >Go Back!</ButtonSucess>
            </ContainerButton>
        )
    }
}

export default Button;