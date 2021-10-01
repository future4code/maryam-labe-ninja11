import React from "react"
import axios from "axios"
import { MainContainer, Descricao, FiltroContainer, InputContainer, LabelContainer, TextoInput, SelectContainer } from './EstiloTelaServicos'
import CardServicos from "../CardServicos/CardServicos"
// import { CardServicos } from '../CardServicos'
import { url } from '../../url/url'

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
        ordenacao: ""
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
                    default:
                        return null;
                }
            })
            .map(servico => {
                return (
                    <CardServicos key={servico.id}
                        titulo={servico.title}
                        dataFinal={servico.dueDate}
                        preco={servico.price}
                        formasDePagamento={servico.paymentMethods}
                        descricao={servico.description}
                        adicionar={this.props.adicionar}
                        produto={servico}
                        trocarTela={this.props.trocarTela}
                    />
                )
            })
        return listaMapeada;
    }



    render() {
        return (
            <div>
                <MainContainer>
                    <FiltroContainer>
                        <LabelContainer>
                            <label>Valor minimo</label>
                            <InputContainer>
                                <TextoInput>R$</TextoInput>
                                <input onChange={this.onChangeValorMinimo} />
                            </InputContainer>
                        </LabelContainer>
                        <LabelContainer>
                            <label>Valor máximo</label>
                            <InputContainer>
                                <TextoInput>R$</TextoInput>
                                <input onChange={this.onChangeValorMaximo} />
                            </InputContainer>
                        </LabelContainer>
                        <LabelContainer>
                            <label>Buscar</label>
                            <InputContainer>

                                <input onChange={this.onChangeBusca} placeholder="Título ou descrição" />
                            </InputContainer>
                        </LabelContainer>
                        <SelectContainer>
                            <label>Ordenar por</label>
                            <select
                                onChange={this.onChangeOrdenacao}>
                                <option value="maior-preco">Maior preço</option>
                                <option value="menor-preco">Menor preço</option>
                                <option value="titulo">Titulo</option>
                                <option value="descricao">Prazo</option>
                            </select>
                        </SelectContainer>

                    </FiltroContainer>

                    {this.renderizarCards()}
                </MainContainer>

            </div>
        )
    }
}