import React from "react";
import { Check, ContainerCheck, LabelCheck, CheckErrorMsg } from "./checkbox.styled";

const CheckBox = ({id, type}) => {
    return(
        <ContainerCheck id={id}>
            <Check id={id} type={type}/>
            <LabelCheck htmlFor={id}>I accept the terms and privacy</LabelCheck>
            <CheckErrorMsg>You must accept the terms</CheckErrorMsg>
        </ContainerCheck>
    )
}

export default CheckBox;