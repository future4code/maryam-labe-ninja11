import styled from "styled-components"

// Estilo básico por enquanto, só para testar!

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #8265c9;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 350px;
    font-size: 16px;
    color: #505050;
    font-weight: 800;

    input {
        padding: 0.5em 0.5em;
        border-radius: 3px;
        border: 1px solid #8265c9;
        width: 200px;
    }

    select {
        border-radius: 3px;
        border: 1px solid #8265c9;
        width: 200px;
        text-align: center;
    }

    h2 {
      font-size: 24px;
      color: #8265c9;

    }
`

export const Descricao = styled.textarea`
    height: 70px;
    width: 200px;
    resize: none;
    border-radius: 3px;
    border: 1px solid #8265c9;
    font-family: Arial;
    color: black;
`