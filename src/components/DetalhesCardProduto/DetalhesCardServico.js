import React from "react";
import Botao from "../Botao/Botao";
import { Header2, Header3, Header5, TextoCorpoStrong } from "../Estilos";
import { EstiloDetalhesCardServicos } from "./EstiloDetalhesCardProduto";

  export default class DetalhesCardServicos extends React.Component{
      render() {
          return(
            <EstiloDetalhesCardServicos>
              <Header2>Título</Header2>
              <br/>
              <Header3>
                Descrição: Mussum Ipsum, cacilds vidis litro abertis. 
                In elementis mé pra quem é amistosis quis leo. Diuretics paradis 
                num copo é motivis de denguis. 
              </Header3>
              <br/>
              <Header5>Valor</Header5>
              <TextoCorpoStrong>Formas de Pagamento</TextoCorpoStrong>
              <br/>
              <nav>
                <Botao 
                onClick={() => this.props.trocarTela("lista")}
                nome={'Voltar'} />
              </nav>
            </EstiloDetalhesCardServicos>
          )
      }
  }

