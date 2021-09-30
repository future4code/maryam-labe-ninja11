import React from "react";
import Botao from "../Botao/Botao";
import CardProdutoCarrinho from "../CardProdutoCarrinho/CardProdutoCarrinho";
import { Titulo, Header3, Header5 } from '../Estilos';
import { EstiloTelaCarrinho, EstiloTotalFinaliza } from "./EstiloTelaCarrinho";

export default class TelaCarrinho extends React.Component {
    state = {
        servicos: [
            {
                "id": "1",
                "title": "Cortar a grama",
                "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
                "price": 40,
                "paymentMethods": [
                    "PayPal",
                    "boleto"
                ],
                "dueDate": "2021-12-30T00:00:00.000Z",
                "taken": false
            },
            {
                "id": "2",
                "title": "Fazer site para sua loja",
                "description": "Fazer sites estáticos para comércio",
                "price": 200,
                "paymentMethods": [
                    "PayPal",
                ],
                "dueDate": "2021-12-30T00:00:00.000Z",
                "taken": false
            }
        ]
    }

    renderizarCards = () => {
        const listaCards = this.state.servicos
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