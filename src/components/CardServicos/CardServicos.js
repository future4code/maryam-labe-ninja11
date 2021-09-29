import React from "react";
import {
  Container,
  Titulo,
  Header1,
  Header2,
  Header3,
  Header4,
  TextoCorpo,
  TextoCorpoStrong,
  TextoLink
} from '../Estilos';
import { EstiloCardServicos } from "./EstiloCardServicos";

export default class CardServicos extends React.Component {
  render() {
    return (
      <EstiloCardServicos>
        <Header2>{this.props.titulo}</Header2>
        <TextoCorpo>Até {this.props.dataFinal} por</TextoCorpo>
        <TextoCorpoStrong> R${this.props.preco}</TextoCorpoStrong>
        <Header4><a href="#">Ver detalhes</a></Header4>
      </EstiloCardServicos>
    )
  }
}