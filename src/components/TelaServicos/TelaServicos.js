import React from "react"
import axios from "axios"
import { MainContainer, Descricao } from './EstiloTelaServicos'
// import { CardServicos } from '../CardServicos'

const headers = {
    headers: {
      Authorization: "47c7672d-2613-4c00-b35e-9a1776b1455e"
    }
  }

export default class TelaServicos extends React.Component {
    state = {
        tituloServico: "",
        descricaoServico: "",
        precoServico: "",
        pagamentoTipo: "",
        ateQuando: "",
        listaDeServicos: []
    }

    componentDidMount() {
        this.getAllJobs()
    }

    // componentDidUpdate() {
    //     this.getAllJobs()
    // }

    handleTitulo = (evento) => {
        this.setState({ tituloServico: evento.target.value })
    }

    handleDescricao = (evento) => {
        this.setState({ descricaoServico: evento.target.value })
    }

    handlePreco = (evento) => {
        this.setState({ precoServico: evento.target.value })
    }

    handleMetodoPagamento = (evento) => {
        this.setState({ pagamentoTipo: evento.target.value })
    }

    handleAteQuando = (evento) => {
        this.setState({ ateQuando: evento.target.value })
    }

    createJob = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {
            title: this.state.tituloServico,
            description: this.state.descricaoServico,
            price: Number(this.state.precoServico),
            paymentMethods: [this.state.pagamentoTipo],
            dueDate: this.state.ateQuando
        }
        axios
      .post(url, body, headers)
      .then ((res) => {
        this.setState({ tituloServico: "", descricaoServico: "", precoServico: "", pagamentoTipo: "", ateQuando: "" })
        alert('Serviço criado com sucesso!')
      })
      .catch ((err) => {
          alert('Houve um erro na criação do serviço. Por favor, tente novamente!')
      })
    }

    getAllJobs = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        axios
        .get (url, headers)
        .then ((res) => {
            this.setState({ listaDeServicos: res.data.jobs })
        })
        .catch((err) => {
            alert('Nenhum serviço foi adicionado ainda!')
        })
    }

render() {
    return (
        <MainContainer>

            <h2>
                Adicione o seu serviço!
            </h2>
            <br/>

            <label>Nome:</label>
            <br />
            <input
            value={this.state.tituloServico}
            onChange={this.handleTitulo}
            type="text"
            placeholder="Nome do seu serviço"
            />
            <br />

            <label>Descrição:</label>
            <br />
            <Descricao
            value={this.state.descricaoServico}
            onChange={this.handleDescricao}
            type="text"
            placeholder="Escreva uma descrição detalhada"
            />
            <br />

            <label>Preço:</label>
            <br />
            <input
            value={this.state.precoServico}
            onChange={this.handlePreco}
            type="text"
            placeholder="Digite o seu preço"
            />
            <br />

            <label>Pagamento:</label>
            <br />
            <select
            value={this.state.pagamentoTipo}
            onChange={this.handleMetodoPagamento}
            >
            <option value="debito">Cartão de débito</option>
            <option value="credito">Cartão de crédito</option>
            <option value="paypal">Paypal</option>
            <option value="boleto">Boleto</option>
            <option value="pix">Pix</option>
            </select>

            <label>Prazo:</label>
            <br />
            <input
            value={this.ateQuando}
            onChange={this.handleAteQuando}
            type="text"
            placeholder="(ANO/MÊS/DIA)"
            />
            <br />
            <br />

            <button onClick={this.createJob}>Criar anúncio</button>

        </MainContainer>
        )
    }
}