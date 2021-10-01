import React from "react";
import DetalhesCardServicos from "../DetalhesCardProduto/DetalhesCardServico";
import { EstiloTelaDetalhes } from "./EstiloTelaDetalhes";


  export default class TelaDetalhes extends React.Component{
      render() {
          return(
            <EstiloTelaDetalhes>
              <DetalhesCardServicos trocarTela={this.props.trocarTela} servico={this.props.servico}/>
            </EstiloTelaDetalhes>
          )
      }
  }