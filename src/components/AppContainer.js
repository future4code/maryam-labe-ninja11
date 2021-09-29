import React, { Component } from 'react';
import EstilosAplicados from './EstilosAplicados';
import CardServicos from './CardServicos/CardServicos';
import Home from './Home/Home';
import Header from './Header/Header';


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        

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
