import React, { Component } from 'react';
import EstilosAplicados from './EstilosAplicados';
import Home from './Home/Home';
import Header from './Header/Header';
import TelaCarrinho from './TelaCarrinho/TelaCarrinho';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import TelaDetalhes from './TelaDetalhesCardServicos/TelaDetalhes';
import TelaServicos from './TelaServicos/TelaServicos';
import Container from './Estilos.js'
import { url } from '../url/url'
import axios from 'axios';
import Footer from './Footer/Footer';


const headers = {
  headers: {
    Authorization: "47c7672d-2613-4c00-b35e-9a1776b1455e"
  }
}

export class AppContainer extends Component {
  state = {
    tela: "servicos",
    servicos: [],
    carrinho: [],
  }

  componentDidMount() {
    this.buscarTodosOsServicos()
  }

  buscarTodosOsServicos = async () => {
    try {
      const todosOsServicos = await axios.get(`${url}/jobs`, headers)
      console.log("TODOS OS SERVIÇOS", todosOsServicos.data.jobs)
      this.setState({ servicos: todosOsServicos.data.jobs })
    } catch (err) {
      console.log("ERRO API", err)
    }
  }

  adicionarAoCarrinho = (produto) => {
    this.setState({ carrinho: [...this.state.carrinho, produto] })
    alert('Adicionado ao carrinho com sucesso!')
  }

  trocarTela = (tela) => {
    this.setState({ tela: tela })
  }

  renderizarTela = () => {
    if (this.state.tela === "home") {
      return (
        <Home
          trocarTela={(tela) => this.trocarTela(tela)}
        />
      )
    }
    if (this.state.tela === "cadastro") {
      return (
        <TelaCadastro />
      )
    }
    if (this.state.tela === "servicos") {
      return (
        <TelaServicos
          trocarTela={this.trocarTela}
          adicionar={(produto) => this.adicionarAoCarrinho(produto)
          } />
      )
    }
    if (this.state.tela === "carrinho") {
      return (
        <TelaCarrinho
          carrinho={this.state.carrinho}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Header
          trocarTela={this.trocarTela}
        />
        {this.renderizarTela()}
        <Footer />
      </div>
    )
  }
}
