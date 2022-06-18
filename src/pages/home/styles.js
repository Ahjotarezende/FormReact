import styled from 'styled-components';

export const Background = styled.div`
    font-family: 'Nunito', sans-serif;
    background-color: white;
    width: 38.5rem;
    max-height: 47.68rem;
    margin: 4rem auto;
    border: none;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 50px;
    @media screen and (max-width: 768px){
        align-self: center;
        height: 100vh;
        margin: 0;
        align-items: center;
    }
`;

export const Logo = styled.img`
    margin-top: 2.4rem;
    max-width: 213px;
    @media screen and (max-width: 768px){
        margin: 5.31rem auto 0 auto;
    }
`;

export const MainTitle = styled.h1`
    margin-bottom: 1.81rem;
    @media screen and (max-width: 768px){
        margin-bottom: 2.5rem;
    }
`;

export const Formulario = styled.form`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(4, 0.25fr);
    column-gap: 1.5rem;
    padding: 0 3.2rem;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(6, 0.16fr);
        column-gap: 0.8125rem;
        padding: 0;
    }
`;