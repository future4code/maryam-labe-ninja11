import React, { Component } from 'react';
import EstilosAplicados from './EstilosAplicados';
import Home from './Home/Home';
import Header from './Header/Header';
import TelaCarrinho from './TelaCarrinho/TelaCarrinho';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import TelaDetalhes from './TelaDetalhesCardServicos/TelaDetalhes';
import TelaServicos from './TelaServicos/TelaServicos';
import Container from './Estilos.js'

export class AppContainer extends Component {
  state = {

    tela: "servicos",

  }

  trocarTela = (tela) => {
    this.setState({ tela: tela })
  }

  renderizarTela = () => {
    if (this.state.tela === "home") {
      return (
        <Home
          trocarTela={(tela) => this.trocarTela(tela)}
          teste="Estou sendo passada"
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
        <TelaServicos trocarTela={this.trocarTela}/>
      )
    }
    if (this.state.tela === "carrinho") {
      return (
        <TelaCarrinho />
      )
    }

    if (this.state.tela === "detalhe"){
      return (
        <TelaDetalhes />
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
      </div>
    )
  }
}
