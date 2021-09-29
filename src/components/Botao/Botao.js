import React from "react";
import { EstiloBotao } from "./EstiloBotao";

export default class Botao extends React.Component {
  render() {
    return (
      <EstiloBotao>{this.props.nome}</EstiloBotao>
    );
  }
}