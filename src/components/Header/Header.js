import React, { Component } from 'react';
import { BotoesContainer, HeaderContainer, ImagemLogo, Link, LogoContainer } from './EstiloHeader';

 

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <LogoContainer>

                    <ImagemLogo src={require('../../Img/labeninja.png')} alt="logo-labeninjas"/>
                    <ImagemLogo src={require('../../Img/labeninjasbranco.png')} alt="logo-labeninjas"/>
                </LogoContainer>   
                <BotoesContainer>
                    <Link>Home</Link>
                    <Link>Carrinho</Link>
                </BotoesContainer>
            </HeaderContainer>
        )
    }
}
