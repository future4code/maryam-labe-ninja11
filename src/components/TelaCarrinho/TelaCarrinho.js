import React from "react";
import Botao from "../Botao/Botao";
import CardProdutoCarrinho from "../CardProdutoCarrinho/CardProdutoCarrinho";
import { Titulo, Header3, Header5 } from '../Estilos';
import { EstiloTelaCarrinho, EstiloTotalFinaliza } from "./EstiloTelaCarrinho";

  export default class TelaCarrinho extends React.Component{
      render() {
          return(
              <EstiloTelaCarrinho>
                <CardProdutoCarrinho
                titulo = {'Título'}
                preco= {'1000,00'}
                />
                <EstiloTotalFinaliza>
                    <Header5>Total: R$</Header5>        
                    <nav>
                        <Botao nome={'Finalizar compra'}/>
                        <Botao nome={'Limpar carrinho'}/>
                    </nav>
                </EstiloTotalFinaliza>
              </EstiloTelaCarrinho>
          )
      }
  }