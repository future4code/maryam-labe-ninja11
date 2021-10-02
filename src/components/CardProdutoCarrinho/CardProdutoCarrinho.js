import React from "react";
import Botao from "../Botao/Botao";
import BotaoDelete from "../Botao/BotaoDelete";
import { Header2, Header4 } from "../Estilos";
import { EstiloCardProdutoCarrinho, ValorEBotao } from "./EstiloCardProdutoCarrinho";


export default class CardProdutoCarrinho extends React.Component {
    render() {
        return (
            <EstiloCardProdutoCarrinho>
                <Header2>{this.props.titulo}</Header2>
                <ValorEBotao>
                    <Header4>R${this.props.preco}</Header4>
                    <BotaoDelete
                        onClick={() => this.props.remover(this.props.servico)}
                    />
                </ValorEBotao>
            </EstiloCardProdutoCarrinho>
        )
    }
}