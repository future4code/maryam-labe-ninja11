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
                         <InputContainer>
                            <label>Valor minimo</label>
                            <div>R$<input /></div>
                        </InputContainer>
                        <InputContainer>
                            <label>Valor máximo</label>
                            <div>R$<input /></div>
                        </InputContainer>
                        <InputContainer>
                            <label>Buscar</label>
                            <input />
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