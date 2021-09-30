import styled from "styled-components";

export const EstiloCardProdutoCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    margin: 5px 0;
    width: 90vw;
    border: 1px solid #8265c9;

    @media (max-width: 1025px){
        padding-left: 20px;
    }
`

export const ValorEBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 16%;

    @media (max-width: 1025px){
        width: 40%;
    }
`