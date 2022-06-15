import React, { useState } from "react";
import { ContainerCheck, HiddenCheckbox, Text, Check, TextError } from "./checkbox.styled";
import CheckIcon from '../../assets/check-solid.svg';

const CheckBox = ({ id, type, name }) => {
    const [checked, setChecked] = useState(false);
    function handleCheckboxChange() {
        setChecked(!checked);
    }
    return (
        <ContainerCheck checked={checked} onClick={handleCheckboxChange}>
            <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
            
            <Check checked={checked}><img alt="tick icon" style={{width: '15px'}} src={CheckIcon}/></Check>
            
            <Text checked={checked}>I accept the terms and privacy</Text>
            
            <TextError>You must accept the terms</TextError>
        </ContainerCheck>
    )
}

export default CheckBox;