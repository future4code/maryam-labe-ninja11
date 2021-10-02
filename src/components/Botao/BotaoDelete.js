import React from "react";
import { EstiloBotaoDelete } from "./EstiloBotaoDelete";

export default class BotaoDelete extends React.Component {
  render() {
    return (
      <EstiloBotaoDelete
        onClick={this.props.onClick}>x</EstiloBotaoDelete>
    );
  }
}