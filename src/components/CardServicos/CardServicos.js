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
import FacebookIcon from "../../Img/icone-facebook.svg"
import Carrinho from "../../Img/icone-carrinho.svg"
import {
  EstiloCardServicos,
  ContainerDetalhes
} from "./EstiloCardServicos";
import TelaDetalhes from "../TelaDetalhesCardServicos/TelaDetalhes";
import Botao from "../Botao/Botao";
import { convertDate } from './ConvertDate';



export default class CardServicos extends React.Component {
  render() {

    return (
      <EstiloCardServicos>
        <Header2>{this.props.titulo}</Header2>
        <TextoCorpo>Até {convertDate(this.props.dataFinal)}</TextoCorpo>
        <TextoCorpoStrong> R${this.props.preco}</TextoCorpoStrong>
        <ContainerDetalhes>
          <Header4><a href="#" onClick={() => this.props.mostraDetalhe(this.props.servico)}>Ver detalhes</a></Header4>
          {/* <img src={Carrinho} /> */}
        </ContainerDetalhes>
        <Botao
          nome={'Adicionar ao carrinho'}
          onClick={() => this.props.adicionar(this.props.servico)} />
      </EstiloCardServicos>
    )
  }
}