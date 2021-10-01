import styled from "styled-components"
import ListaServicos from "./ListaServicos"

// Estilo básico por enquanto, só para testar!

export const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 70vw;
    height: fit-content;

    input {

        border: none;
        outline: none;
        font-size: 1rem;
        color: #8265c9;
        ::placeholder{
            color: #8265c9;
        }
    }

    button {
        padding: 5px;
        border-radius: 3px;
        border: 1px solid purple;
        color: white;
        background-color: #8265c9;
    }

    select {
        
        border: 1px solid #8265c9;
        /* width: 170px; */
        text-align: center;
        color: #8265c9;
        /* padding: 0.5em 0.5em; */
        font-size: 1rem;
    }

    label {
        color: #8265c9;
    }

    @media (max-width: 1025px){
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
`



export const FiltroContainer = styled.div `
    display: flex;
    grid-column: 1/5;
    
    @media (max-width: 1025px){
        display: flex;
        flex-direction: column;
    }
`

export const LabelContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    /* border: 1px solid #8265c9; */
`
export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    height: 2rem;
    /* margin: 0.5rem; */
    border: 1px solid #8265c9;
`
export const SelectContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    padding: 0.5rem;
    /* border: 1px solid #8265c9; */
`


export const TextoInput = styled.p`
    color: #8265c9;
`

