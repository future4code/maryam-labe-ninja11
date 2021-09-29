import React from "react";
import Botao from "../Botao/Botao";
import { Titulo, Header3 } from '../Estilos';
import { EstiloHome } from "./EstiloHome";

  export default class Home extends React.Component{
      render() {
          return(
              <EstiloHome>
                  <Titulo>LabeNinjas</Titulo>
                  <Header3>O talento certo no momento certo</Header3>
                  <nav>
                    <Botao nome={'Quero ser um ninja'}/>
                    <Botao nome={'Contratar um ninja'}/>
                  </nav>
              </EstiloHome>
          )
      }
  }