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
    tela: "home",
    valorTotal: 0,
    servicos: [],
    carrinho: []
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
    const precoNumber = Number(produto.price)
    this.somarValorTotal(precoNumber)
  }

  somarValorTotal = (preco) => {

    this.setState({valorTotal: this.state.valorTotal + preco})
  } 

  removerDoCarrinho = (produto) => {
    const carrinho = [...this.state.carrinho]
    const indexProduto = carrinho.indexOf(produto);
    carrinho.splice(indexProduto, 1);
    this.setState({ carrinho: carrinho })
    const precoNumber = Number(produto.price)
    this.subtrairValorTotal(precoNumber)
  }

  subtrairValorTotal = (preco) => {
    
    this.setState({valorTotal: this.state.valorTotal - preco})
  }

  limparCarrinho = () => {
    this.setState({ carrinho: [], valorTotal: 0 })
  }

  finalizarCompra = () => {
    this.setState({ carrinho: [], valorTotal: 0 })
    alert('Compra finalizada com sucesso. Agradecemos por comprar com a gente!')
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
          adicionar={(servico) => this.adicionarAoCarrinho(servico)}
        />
      )
    }
    if (this.state.tela === "carrinho") {
      return (
        <TelaCarrinho
          carrinho={this.state.carrinho}
          limparCarrinho={this.limparCarrinho}
          finalizarCompra={this.finalizarCompra}
          remover={(servico) => this.removerDoCarrinho(servico)}
          trocarTela={this.trocarTela}
          valorTotal={this.state.valorTotal}
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
