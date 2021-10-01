import React from "react"
import { TextoFooter, MainContainer, IconesRedesSociais, IconesContainer, AlinhaTodos } from './EstiloFooter'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
            <MainContainer>
                <AlinhaTodos>
                <IconesContainer>

                    <IconesRedesSociais src={require('../../Img/icone-facebook.png')} alt="Facebook" title="Curta a nossa página no Facebook!"/>
                    <IconesRedesSociais src={require('../../Img/icone-instagram.png')} alt="Instagram" title="Siga o nosso perfil no Instagram!"/>
                    <IconesRedesSociais src={require('../../Img/icone-twitter.png')} alt="Twitter" title="Siga o nosso perfil no Twitter!"/>
                        Contato: labeninjas@gmail.com | (11) 2222-1242

                </IconesContainer>  

                <TextoFooter>
                <p>©2009 - 2021, LabeNinjas Serviços de Internet. CNPJ 22.222.111/0001-11 - Avenida João Bosco, 25 - São Paulo/SP - Brasil</p>
                </TextoFooter>
                </AlinhaTodos>
            </MainContainer>
            </div>
        )
    }
}
