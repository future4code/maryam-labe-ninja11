import React from "react";
import { EstiloBotao } from "./EstiloBotao";

export default class Botao extends React.Component {
  render() {
    return (
      <EstiloBotao
        onClick={this.props.onClick}
      >{this.props.nome}</EstiloBotao>
    );
  }
}

