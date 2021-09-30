import React, { Component } from 'react';
import styled from 'styled-components';


export const HeaderContainer = styled.div`
    background-color: #8265c9;
    display: flex;
    justify-content: space-between;
    padding:  .5rem 3.5rem;
    width: 100vw;
    border-bottom: 1px solid black;
    @media(max-width: 700px){
        
        .logo{
            display: none;
        }
    }

    @media(max-width: 550px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const LogoContainer = styled.div`
    display: flex;

`

export const BotoesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagemLogo = styled.img`
    height: 15vh;
`
export const BotoaoHeader = styled.button`
    color: white;
    padding: 1rem;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    :hover{
        cursor: pointer;
    }
`

