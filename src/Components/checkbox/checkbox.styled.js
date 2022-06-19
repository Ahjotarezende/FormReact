import styled from 'styled-components';

const ContainerCheck = styled.div`
    height: 60px;
    margin-top: 126px;
    align-self: end;
    justify-self: start;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 8px;
    @media screen and (max-width: 768px){
        grid-column: 1/3;
        margin-top: 43px;
        row-gap: 0;
        height: 50px;
    }
    @media screen and (max-width: 376px){
        margin-top: 1rem;
    }
`;
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`;
const Text = styled.label`
    grid-row: 1;
    font-size: 1.1rem;
    text-shadow: 0px 3px 3px rgba(29, 29, 29, 0.3);
`;
const Check = styled.label`
    cursor: pointer;
    grid-row: 1;
    width: 18px;
    height: 18px;
    border: 2px solid #0DBDBD;
    border-radius: 2px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1px;
    background-color: ${props => props.checked ? '#0DBDBD' : 'white'};

    img {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(100%) sepia(12%) saturate(7450%) hue-rotate(193deg) brightness(114%) contrast(110%);}
`;

const TextError = styled.p`
    display: none;
    grid-row: 2;
    grid-column: 1/3;
    text-align: left;
    font-size: 0.89rem;
    color: red;
    margin: 0;
`;

export {ContainerCheck, HiddenCheckbox, Text, Check, TextError}