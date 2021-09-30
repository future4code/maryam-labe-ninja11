import React, { Component } from 'react';
import { BotoesContainer, HeaderContainer, ImagemLogo, BotoaoHeader, LogoContainer } from './EstiloHeader';
import Home from '../Home/Home';
 import Carrinho from '../TelaCarrinho/TelaCarrinho'

export default class Header extends Component {


    render() {
        return (
            <div>

            <HeaderContainer>
                <LogoContainer>

                    <ImagemLogo src={require('../../Img/labeninja.png')} alt="logo-labeninjas" className="logo"/>
                    <ImagemLogo src={require('../../Img/labeninjasbranco.png')} alt="logo-labeninjas"/>
                </LogoContainer>   
                <BotoesContainer>
                    <BotoaoHeader onClick={()=>this.props.trocarTela("home")}>Home</BotoaoHeader>
                    <BotoaoHeader onClick={()=>this.props.trocarTela("carrinho")}>Carrinho</BotoaoHeader>
                </BotoesContainer>
            </HeaderContainer>
            
        
            
             
            
            </div>
        )
    }
    
}
