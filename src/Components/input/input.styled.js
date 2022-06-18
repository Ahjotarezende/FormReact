import styled from 'styled-components';

const getId = (id) => {
    if(id==="name"){
        return`
            grid-column: 1/3;
            @media screen and (max-width: 768px){
                margin-bottom: 4px;
            }
        `;
    }
    else if(id==="email"){
        return`
            grid-column: 1/2;
            margin-top: 18px;
            @media screen and (max-width: 768px){
                margin: 0;
                grid-column: 1/3;
                grid-row: 2;
            }
        `;
    }
    else if(id==="phone"){
        return`
            margin-top: 17px;
            grid-row: 2/3;
            grid-column: 2/3;
            @media screen and (max-width: 768px){
                margin: 0;
                grid-column: 1/2;
                grid-row: 4;
            }
        `;
    }
    else if(id==="password"){
        return`
            margin-top: 31px;
            grid-column: 1/2;
            @media screen and (max-width: 768px){
                margin: 4px 0 4px 0;
                grid-column: 1/3;
                grid-row: 3;
                document.getElementById(password).placeholder='';
            }
        `;
    }
    else if(id==="age"){
        return`
            margin-top: 31px;
            grid-column: 2/3;
            @media screen and (max-width: 768px){
                margin: 0;
                grid-column: 2/3;
                grid-row: 4;
            }
        `;
    }
}

const Container = styled.div`
    ${({id}) => getId(id)}
    height: 5.6rem;
    @media screen and (max-width: 768px){
        height: 5rem;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.87rem;
    color: #767676;
    text-align: left;
`;
const InputField = styled.input`
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    height: 2.5rem;
    width: 100%;
    padding-left: 0.8rem;
    padding-right: 0.8rem; 
`;

const ErrorMessage = styled.p`
    //display: none;
    text-align: left;
    font-size: 0.89rem;
    color: red;
    margin: 7px 0 0 0;
    @media screen and (max-width: 768px){
        margin: 0;
    }
`;

export {Container, Label, InputField, ErrorMessage}