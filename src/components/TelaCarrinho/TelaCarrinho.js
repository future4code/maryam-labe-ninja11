import React from "react";
import Botao from "../Botao/Botao";
import CardProdutoCarrinho from "../CardProdutoCarrinho/CardProdutoCarrinho";
import { Titulo, Header3, Header5 } from '../Estilos';
import { EstiloTelaCarrinho, EstiloTotalFinaliza } from "./EstiloTelaCarrinho";

export default class TelaCarrinho extends React.Component {
    state = {
        valorTotal: 0
    }

    componentDidMount = () => {
        this.somaValores();
    }

    renderizarCards = () => {
        const listaCards = this.props.carrinho
            .map(servico => {
                return (
                    <CardProdutoCarrinho key={servico.id}
                        titulo={servico.title}
                        preco={servico.price}
                        adicionar={this.props.adicionar}
                        remover={this.props.remover}
                        servico={servico}
                    />
                )
            })
        return listaCards;
    }

    somaValores = () => {
        let valor = Number(this.state.valorTotal);
        const valorTotal = this.props.carrinho
            .map(servico => {
                valor += Number(servico.price);
                return valor;
            })
        this.setState({ valorTotal: valorTotal })
    }

    render() {
        return (
            <EstiloTelaCarrinho>
                {this.renderizarCards()}
                <EstiloTotalFinaliza>
                    <Header5>Total: R${this.state.valorTotal}</Header5>
                    <nav>
                        <Botao nome={'Finalizar compra'}
                            onClick={this.props.finalizarCompra}
                        />
                        <Botao nome={'Limpar carrinho'}
                            onClick={this.props.limparCarrinho}
                        />
                    </nav>
                </EstiloTotalFinaliza>
            </EstiloTelaCarrinho>
        )
    }
}