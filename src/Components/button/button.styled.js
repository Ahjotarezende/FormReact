import styled from 'styled-components';

const ContainerButton = styled.div`
    grid-column: 2/3;
    justify-self: end;
    margin-top: 137px;
`;

const ButtonSucess = styled.button`
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

export {ContainerButton, ButtonSucess}