import styled from "styled-components";

export const EstiloTelaCarrinho = styled.div`
    background-color: #f3f3fb;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const EstiloTotalFinaliza = styled.div`
    margin-top: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1025px){
        display: grid;
        justify-content: center;
    }
`