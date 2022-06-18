import styled from 'styled-components';

export const Logo = styled.img`
    margin: 5.5rem auto 0 auto;
    max-width: 213px;
`;

export const Background = styled.div`
    background-color: white;
    width: 38.5rem;
    height: 47rem;
    margin: 4rem auto;
    border: none;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 50px;
    @media screen and (max-width: 768px){
        height: 46rem;
    }
    @media screen and (max-width: 415px){
        margin-top: 4rem;
        padding: 0;
        height: 100%;
    }
    @media screen and (max-width: 376px){
        margin: 0;
    }
    @media screen and (max-height: 812px){
        margin-top: 4rem;
        padding: 0;
        height: 100%;
    }
    @media screen and (max-height: 668px){
        margin-top: 1rem;
    }
`;

export const MainTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    margin: 6.93rem 0 8.56rem 0;
    font-size: 2.5rem;
    @media screen and (max-width: 375px){
        margin: 4rem 0 7rem 0;
    }
`;