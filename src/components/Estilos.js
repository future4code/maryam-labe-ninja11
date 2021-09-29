import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Roboto', sans - serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h1,h2,h3,h4,h5,h6,p{
    padding: 0;
    margin: 0;
  }
`

export const Titulo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #8265c9;
`

export const Header1 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: #8265c9;
`
export const Header2 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #8265c9;
`
export const Header3 = styled.h3`
font-size: 24px;
font-weight: 500;
color: #9c9a9c;
`

export const Header4 = styled.h4`
  font-size: 16px;
  color: #8265c9;
  text-transform: uppercase;
  font-weight: 400;
`
export const TextoCorpo = styled.p`
  display: inline;
  font-size: 16px;
  color: #505050;
`
export const TextoCorpoStrong = styled.p`
  display: inline;
  font-size: 16px;
  color: #505050;
  font-weight: 500;
`

export const TextoLink = styled.p`
  display: inline;
  color: #8265c9;
  text-decoration: none;
  
  a{
    text-decoration: none;
    color: #8265c9;
  }
`