import React from "react";
import Botao from "../Botao/Botao";
import { Titulo, Header3 } from '../Estilos';
import { EstiloHome } from "./EstiloHome";

export default class Home extends React.Component {
    render() {
        return (
            <EstiloHome>
                <Titulo>LabeNinjas</Titulo>
                <Header3>O talento certo no momento certo</Header3>
                <nav>
                    <Botao
                        onClick={() => this.props.trocarTela("cadastro")}
                        nome={'Quero ser um ninja'}
                    />
                    <Botao
                        onClick={() => this.props.trocarTela("servicos")}
                        nome={'Contratar um ninja'}
                    />
                    {console.log(this.props.teste)}
                </nav>
            </EstiloHome>
        )
    }
}