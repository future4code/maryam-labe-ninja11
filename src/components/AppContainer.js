import React, { Component } from 'react';
import EstilosAplicados from './EstilosAplicados';
import CardServicos from './CardServicos/CardServicos';
import Home from './Home/Home';

import Header from './Header/Header';







import TelaCarrinho from './TelaCarrinho/TelaCarrinho';
import TelaServicos from './TelaServicos/TelaServicos'


export class AppContainer extends Component {
  state = {
    tela: "home",
  }

  trocarTela = (tela) => {
    console.log("TELA:", tela)
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
        <div>Cadastro</div>
      )
    }
    if (this.state.tela === "servicos") {
      return (
        <div>Serviços</div>
      )
    }
  }


  render() {
    return (
      <div>

        <Header />



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
