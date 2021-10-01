import React from "react"
import axios from "axios"
import { MainContainer, Descricao, FiltroContainer, InputContainer, LabelContainer, TextoInput, SelectContainer } from './EstiloTelaServicos'
import CardServicos from "../CardServicos/CardServicos"
// import { CardServicos } from '../CardServicos'
import { url } from '../../url/url'
import TelaDetalhes from "../TelaDetalhesCardServicos/TelaDetalhes"
import ListaServicos from "./ListaServicos"

const headers = {
    headers: {
        Authorization: "47c7672d-2613-4c00-b35e-9a1776b1455e"
    }
}

export default class TelaServicos extends React.Component {
    state = {
        servicos: [],
        valorMaximo: "",
        valorMinimo: "",
        busca: "",
        ordenacao: "",
        tela: "lista",
        servicoDetalhe: ""
    }

    componentDidMount() {
        this.buscarTodosOsServicos()
    }

    buscarTodosOsServicos = async () => {
        try {
            const todosOsServicos = await axios.get(`${url}/jobs`, headers)
            console.log(todosOsServicos.data.jobs)
            this.setState({ servicos: todosOsServicos.data.jobs })
        } catch (err) {
            console.log(err)
        }
    }

    onChangeValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value })
        console.log(this.state.valorMaximo)
    }

    onChangeValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value })
        console.log(this.state.valorMaximo)
    }

    onChangeBusca = (event) => {
        this.setState({ busca: event.target.value });
    }

    onChangeOrdenacao = (event) => {
        this.setState({ ordenacao: event.target.value })
    }

    renderizarCards = () => {

        const listaMapeada = this.state.servicos
            .filter((servico) => {
                return servico.title.toLowerCase().includes(this.state.busca.toLowerCase())
                    ||
                    servico.description.toLowerCase().includes(this.state.busca.toLowerCase())
            })
            .filter((servico) => {
                return this.state.valorMaximo === "" || servico.price < this.state.valorMaximo
            })
            .filter((servico) => {
                return this.state.valorMinimo === "" || servico.price > this.state.valorMinimo
            })
            .sort((servicoAtual, servicoProximo) => {
                switch (this.state.ordenacao) {
                    case "maior-preco":
                        return servicoProximo.price - servicoAtual.price;
                    case "titulo":
                        return servicoAtual.title.localeCompare(servicoProximo.title);
                    case "menor-preco":
                        return -1 * (servicoProximo.price - servicoAtual.price);
                    case "prazo":
                        return servicoAtual.dueDate > servicoProximo.dueDate;
                    default:
                        return null;
                }
            })
            .map(servico => {
                // console.log(servico.title, servico.dueDate)
                return (
                    <CardServicos key={servico.id}
                        titulo={servico.title}
                        dataFinal={servico.dueDate}
                        preco={servico.price}
                        formasDePagamento={servico.paymentMethods}
                        descricao={servico.description}
                        adicionar={this.props.adicionar}
                        produto={servico}
                        mostraDetalhe={this.mostraDetalhe}
                    />
                )
            })
        return listaMapeada;
    }


    mostraDetalhe = (servico) => {
        {this.atualizaTela("detalhe")}
        this.setState({servicoDetalhe: servico})
    }
    atualizaTela = (tela) => {
        this.setState({ tela: tela })
    }

    renderizarTela = () => {
        if (this.state.tela === "lista") {
            return (
                <ListaServicos
                    renderizarCards={this.renderizarCards()}
                    onChangeValorMaximo={this.onChangeValorMaximo}
                    onChangeValorMinimo={this.onChangeValorMinimo}
                    onChangeBusca={this.onChangeBusca}
                    onChangeOrdenacao={this.onChangeOrdenacao}
                />

            )
        }
        if (this.state.tela === "detalhe") {
            return (
                <TelaDetalhes
                    trocarTela={this.atualizaTela}
                    servico = {this.state.servicoDetalhe}
                />
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderizarTela()}


            </div>
        )
    }
}