import React from "react"
import axios from "axios"
import { MainContainer, Descricao, FiltroContainer, InputContainer } from './EstiloTelaServicos'
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
        busca: ""
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
            .map(servico => {
                return (
                    <CardServicos key={servico.id}
                        titulo={servico.title}
                        dataFinal={servico.dueDate}
                        preco={servico.price}
                        adicionar={() => this.props.adicionarAoCarrinho}
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
                        <InputContainer>
                            <label>Valor minimo</label>
                            <div>R$<input onChange={this.onChangeValorMinimo}/></div>
                        </InputContainer>
                        <InputContainer>
                            <label>Valor máximo</label>
                            <div>R$<input onChange={this.onChangeValorMaximo}/></div>
                        </InputContainer>
                        <InputContainer>
                            <label>Buscar</label>
                            <input onChange={this.onChangeBusca}/>
                        </InputContainer>
                        <div>
                            <p>Ordenar por</p>
                            <select>
                                <option>Maior preço</option>
                                <option>Menor preço</option>
                                <option>Titulo</option>
                                <option>Prazo</option>
                            </select>
                        </div>

                     </FiltroContainer>
                    
                    {this.renderizarCards()}
                </MainContainer> 

            </div>
        )
    }
}