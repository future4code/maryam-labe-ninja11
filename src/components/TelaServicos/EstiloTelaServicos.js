import styled from "styled-components"

// Estilo básico por enquanto, só para testar!

export const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    /* border: 2px solid purple; */
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 70vw;
    height: fit-content;

    input {
        padding: 0.5em 0.5em;
        /* border-radius: 9px; */
        border: none;
        outline: none;
        font-size: 1rem;
    }

    button {
        padding: 5px;
        border-radius: 3px;
        border: 1px solid purple;
        color: white;
        background-color: #8265c9;
    }

    select {
        /* border-radius: 9px; */
        border: 1px solid #8265c9;
        width: 170px;
        text-align: center;
        color: #8265c9;
        padding: 0.5em 0.5em;
        font-size: 1rem;
    }

    label {
        color: #8265c9;
    }
`

export const Descricao = styled.textarea `
    height: 70px;
    border-radius: 3px;
    border: 1px solid purple;
    font-family: Arial;
    color: black;
`

export const FiltroContainer = styled.div `
    display: flex;
    grid-column: 1/5;
`

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    border: 1px solid #8265c9;
`