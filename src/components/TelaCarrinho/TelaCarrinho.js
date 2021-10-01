import React from "react";
import Botao from "../Botao/Botao";
import CardProdutoCarrinho from "../CardProdutoCarrinho/CardProdutoCarrinho";
import { Titulo, Header3, Header5 } from '../Estilos';
import { EstiloTelaCarrinho, EstiloTotalFinaliza } from "./EstiloTelaCarrinho";

export default class TelaCarrinho extends React.Component {
    renderizarCards = () => {
        const listaCards = this.props.carrinho
            .map(servico => {
                return (
                    <CardProdutoCarrinho key={servico.id}
                        titulo={servico.title}
                        preco={servico.price}
                    />
                )
            })
        return listaCards;
    }

    render() {
        return (
            <EstiloTelaCarrinho>
                {this.renderizarCards()}
                <EstiloTotalFinaliza>
                    <Header5>Total: R$</Header5>
                    <nav>
                        <Botao nome={'Finalizar compra'} />
                        <Botao nome={'Limpar carrinho'} />
                    </nav>
                </EstiloTotalFinaliza>
            </EstiloTelaCarrinho>
        )
    }
}