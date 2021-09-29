import styled from "styled-components";

export const EstiloCardServicos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12rem;
  height: 10rem;
  padding: 20px 40px;
  background-color: #FFF;
  border: 2px solid #8265c9;

  h1,h2,h3,h4,h5,h6,p{
    padding: 0;
    margin: 0;
  }

  img{  
  width: 30px;
  height: 30px; 
}

a{
  color: #8265c9;
  text-decoration: none;
}
`

export const ContainerDetalhes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`