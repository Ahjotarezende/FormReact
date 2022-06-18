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
            <ButtonSucess onClick={props.onClick} >Go Back!</ButtonSucess>
        )
    }
}

export default Button;