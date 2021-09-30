import React, { Component } from 'react';
import { BotoesContainer, HeaderContainer, ImagemLogo, BotoaoHeader, LogoContainer } from './EstiloHeader';
import Home from '../Home/Home';
 import Carrinho from '../TelaCarrinho/TelaCarrinho'

export default class Header extends Component {
    state = {
        telaAtual: "home"
    }
    
    atualizaTela = (tela) => {
        this.setState({telaAtual: tela})
        
    }

    mostraTela = () =>{
        if(this.state.telaAtual === "home"){
            return <Home/>
        }else if(this.state.telaAtual === "carrinho"){
            return <p>Carrinho</p>
        }
    }

    render() {
        return (
            <div>

            <HeaderContainer>
                <LogoContainer>

                    <ImagemLogo src={require('../../Img/labeninja.png')} alt="logo-labeninjas" className="logo"/>
                    <ImagemLogo src={require('../../Img/labeninjasbranco.png')} alt="logo-labeninjas"/>
                </LogoContainer>   
                <BotoesContainer>
                    <BotoaoHeader onClick={()=>this.atualizaTela("home")}>Home</BotoaoHeader>
                    <BotoaoHeader onClick={()=>this.atualizaTela("carrinho")}>Carrinho</BotoaoHeader>
                </BotoesContainer>
            </HeaderContainer>
            
        
            {this.mostraTela()}
             
            
            </div>
        )
    }
    
}
