import React, { Component } from 'react'
import TelaServicos from './TelaServicos/TelaServicos'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <TelaServicos
          // nome={this.state.tituloServico}
          // descricao={this.state.descricaoServico}
          // preco={this.state.precoServico}
          // pagamento={this.state.pagamentoTipo}
          // ateQuando={this.state.ateQuando}
          // listaServicos={this.state.listaDeServicos}
        />
      </div>
    )
  }
}
