import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #ECEEF2;
        @media screen and (max-width: 768px){
            background-color: white;
        }
    }
    #root{
        @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }
    }
`;
export default GlobalStyles;
