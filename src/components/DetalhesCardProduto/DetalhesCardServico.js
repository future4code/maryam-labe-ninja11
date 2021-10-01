import React from "react";
import Botao from "../Botao/Botao";
import { Header2, Header3, Header5, TextoCorpoStrong, TextoCorpo } from "../Estilos";
import { EstiloDetalhesCardServicos } from "./EstiloDetalhesCardProduto";

  export default class DetalhesCardServicos extends React.Component{
      render() {
          return(
            <EstiloDetalhesCardServicos>
              <Header2>{this.props.servico.title}</Header2>
              <br/>
              <Header3>
                {this.props.servico.description} 
              </Header3>
              <br/>
              <Header5>Valor: R${this.props.servico.price}</Header5>
              <TextoCorpoStrong>Formas de Pagamento: </TextoCorpoStrong>
              <TextoCorpo>
                  {this.props.servico.paymentMethods.map((metodo)=>{
                    return <p>{metodo}</p>
                  })}
              </TextoCorpo>
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

