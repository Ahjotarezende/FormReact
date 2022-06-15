import styled from 'styled-components';

export const Background = styled.div`
    font-family: 'Nunito', sans-serif;
    background-color: white;
    width: 38.5rem;
    max-height: 763px;
    margin: 2rem auto;
    border: none;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 64px;
`;

export const Logo = styled.img`
    margin: 2.4rem auto 0 auto;
    max-width: 213px;
`;

export const MainTitle = styled.h1`
    margin-bottom: 0.95rem;
`;

export const Formulario = styled.form`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 24px;
    padding: 0 3.2rem;
`;