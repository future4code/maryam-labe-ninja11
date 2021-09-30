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
        border-radius: 3px;
        border: 1px solid purple;
    }

    button {
        padding: 5px;
        border-radius: 3px;
        border: 1px solid purple;
        color: white;
        background-color: #8265c9;
    }

    select {
        border-radius: 3px;
        border: 1px solid purple;
        width: 170px;
        text-align: center;
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