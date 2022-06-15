import styled from 'styled-components';

const ContainerButton = styled.div`
    grid-column: 2/3;
    justify-self: end;
    margin-top: 130px;
`;

const ButtonRegister = styled.button`
    background-color: #0DBDBD;
    color: white;
    font-family: 'Nunito', sans-serif;
    width: 81px;
    height: 40px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const ButtonSucess = styled.button`
    background-color: #0DBDBD;
    color: white;
    font-family: 'Nunito', sans-serif;
    width: 16.81rem;
    height: 11.06rem;
    font-size: 2.25rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export {ContainerButton, ButtonRegister, ButtonSucess}