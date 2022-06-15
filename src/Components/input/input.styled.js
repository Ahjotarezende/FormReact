import styled from 'styled-components';
const Container = styled.div`
    grid-column: 1/3;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.89rem;
    color: #767676;
    text-align: left;
`;
const InputField = styled.input`
    box-sizing: border-box;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    height: 5vh;
    width: 100%;
    padding-left: 2.5%; 
`;

export {Container, Label, InputField}