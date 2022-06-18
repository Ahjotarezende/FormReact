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
`;

export const MainTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    margin: 6.93rem 0 8.56rem 0;
    font-size: 2.5rem;
`;