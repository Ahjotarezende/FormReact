import styled from 'styled-components';

export const Background = styled.div`
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    background-color: white;
    width: 38.5rem;
    height: 48rem;
    margin: 5.2rem auto;
    border: none;
    border-radius: 20px;
    text-align: center;
`;

export const Logo = styled.img`
    margin: 2.4rem auto 1rem auto;
    max-width: 213px;
`;

export const MainTitle = styled.h1`
    margin-bottom: 1.8rem;
`;

export const Formulario = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 24px;
    padding: 0 3.2rem;
`;

export const ErrorMessage = styled.p`
    text-align: left;
    font-size: 0.89rem;
    color: red;
    margin: 7px 0 0 0;
    padding-bottom: 1.2rem;
`;