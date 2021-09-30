import React from "react";
import DetalhesCardServicos from "../DetalhesCardProduto/DetalhesCardServico";
import EstilosAplicados from "../EstilosAplicados";
import { EstiloTelaDetalhes } from "./EstiloTelaDetalhes";


  export default class TelaDetalhes extends React.Component{
      render() {
          return(
            <EstiloTelaDetalhes>
              {/* <EstilosAplicados/> */}
              <DetalhesCardServicos/>
            </EstiloTelaDetalhes>
          )
      }
  }