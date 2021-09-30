import React from "react"
import axios from "axios"
import { MainContainer, Descricao, FiltroContainer } from './EstiloTelaServicos'
import CardServicos from "../CardServicos/CardServicos"
// import { CardServicos } from '../CardServicos'
import { url } from '../../url/url'

const headers = {
    headers: {
      Authorization: "47c7672d-2613-4c00-b35e-9a1776b1455e"
    }
  }

export default class TelaServicos extends React.Component {
    state={
        servicos: []
    }

    componentDidMount() {
        this.buscarTodosOsServicos()
    }

    buscarTodosOsServicos = async() =>  {
        try{
            const todosOsServicos = await axios.get(`${url}/jobs`, headers)
            console.log(todosOsServicos.data.jobs)
            this.setState({servicos: todosOsServicos.data.jobs})
        }catch(err){
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                 <MainContainer>
                     <FiltroContainer>
                        <label>Valor minimo</label>
                        <input />
                        <label>Valor máximo</label>
                        <input />
                        <label>Ordenar por</label>
                        <select>
                            <option>Maior preço</option>
                            <option>Menor preço</option>
                            <option>Titulo</option>
                            <option>Prazo</option>
                        </select>
                        <label>Buscar</label>
                        <input />
                     </FiltroContainer>
                    {this.state.servicos.map((servico) => {
                        return <CardServicos 
                            titulo={servico.title}
                            dataFinal={servico.dueDate}
                            preco={servico.price}
                        
                        />
                    })}
                </MainContainer> 
            </div>
        )
    }
}