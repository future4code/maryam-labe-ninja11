import React from "react"
import axios from "axios"
import { MainContainer, DivPrincipal, Descricao } from './EstiloTelaCadastro'
import Botao from "../Botao/Botao"


const headers = {
  headers: {
    Authorization: "47c7672d-2613-4c00-b35e-9a1776b1455e"
  }
}

export default class TelaCadastro extends React.Component {
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
      .then((res) => {
        this.setState({ tituloServico: "", descricaoServico: "", precoServico: "", pagamentoTipo: "", ateQuando: "" })
        alert('Serviço criado com sucesso!')
      })
      .catch((err) => {
        alert('Houve um erro na criação do serviço. Por favor, tente novamente!')
      })
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ listaDeServicos: res.data.jobs })
      })
      .catch((err) => {
        alert('Nenhum serviço foi adicionado ainda!')
      })
  }

  render() {
    return (
      <MainContainer>
        <DivPrincipal>
        <h2>
          Adicione o seu serviço!
        </h2>
        <br />

        <label>Nome:</label>
        
        <input
          value={this.state.tituloServico}
          onChange={this.handleTitulo}
          type="text"
          placeholder="Nome do seu serviço"
        />
        <br />

        <label>Descrição:</label>
        
        <Descricao
          value={this.state.descricaoServico}
          onChange={this.handleDescricao}
          type="text"
          placeholder="Escreva uma descrição detalhada"
        />
        <br />

        <label>Preço:</label>
        
        <input
          value={this.state.precoServico}
          onChange={this.handlePreco}
          type="text"
          placeholder="Digite o seu preço"
        />
        <br />

        <label>Pagamento:</label>
        
        <select
          value={this.state.pagamentoTipo}
          onChange={this.handleMetodoPagamento}
        >
          <option value=""></option>
          <option value="debito">Cartão de débito</option>
          <option value="credito">Cartão de crédito</option>
          <option value="paypal">Paypal</option>
          <option value="boleto">Boleto</option>
          <option value="pix">Pix</option>
        </select>
        <br />

        <label>Prazo:</label>
        
        <input
          value={this.ateQuando}
          onChange={this.handleAteQuando}
          type="text"
          placeholder="ANO-MÊS-DIA - AAAA-MM-DD"
        />

        <Botao nome={'Criar anúncio'} onClick={this.createJob}/>

        </DivPrincipal>
      </MainContainer>
    )
  }
}