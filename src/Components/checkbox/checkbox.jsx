import React, { useState } from "react";
import { ContainerCheck, HiddenCheckbox, Text, Check, TextError } from "./checkbox.styled";
import CheckIcon from '../../assets/check-solid.svg';

const CheckBox = ({id, name, type, register, errors }) => {
    const [checked, setChecked] = useState(false);
    function handleCheckboxChange() {
        setChecked(!checked);
    }
    return (
        <ContainerCheck checked={checked} onClick={handleCheckboxChange}>
            <HiddenCheckbox id={id} name={name} {...register("Check", {required:  true})}  onChange={handleCheckboxChange} checked={checked} />
            
            <Check id={id} name={name} checked={checked}><img alt="tick icon" style={{width: '15px'}} src={CheckIcon}/></Check>
            
            <Text checked={checked}>I accept the terms and privacy</Text>
            
            {errors.Check && <TextError>You must accept the terms</TextError>}
        </ContainerCheck>
    )
}

export default CheckBox;