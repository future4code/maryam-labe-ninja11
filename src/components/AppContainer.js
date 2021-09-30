import React, { Component } from 'react';
import EstilosAplicados from './EstilosAplicados';
import CardServicos from './CardServicos/CardServicos';
import Home from './Home/Home';
import Header from './Header/Header';
import TelaCarrinho from './TelaCarrinho/TelaCarrinho';
import TelaCadastro from './TelaCadastro/TelaCadastro';

export class AppContainer extends Component {
  state = {
    tela: "home",
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
        <div>Serviços</div>
      )
    }
    if (this.state.tela === "carrinho") {
      return (
        <TelaCarrinho />
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

        {/* O componente EstilosAplicados é só para testar os estilos do Estilos.js e pode ser comentado  */}
        {/* <EstilosAplicados />
        <CardServicos
          titulo={'Título'}
          dataFinal={'06/08/2021'}
          preco={'800,00'}
        /> */}
      </div>
    )
  }
}
