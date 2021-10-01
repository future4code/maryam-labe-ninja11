import React from "react";
import { FiltroContainer, LabelContainer, InputContainer, TextoInput, SelectContainer, MainContainer } from "./EstiloTelaServicos";


export default class ListaServicos extends React.Component {
    render() {
        return (
            <MainContainer>
                <FiltroContainer>
                    <LabelContainer>
                        <label>Valor mínimo</label>
                        <InputContainer>
                            <TextoInput>R$</TextoInput>
                            <input onChange={this.props.onChangeValorMinimo} />
                        </InputContainer>
                    </LabelContainer>
                    <LabelContainer>
                        <label>Valor máximo</label>
                        <InputContainer>
                            <TextoInput>R$</TextoInput>
                            <input onChange={this.props.onChangeValorMaximo} />
                        </InputContainer>
                    </LabelContainer>
                    <LabelContainer>
                        <label>Buscar</label>
                        <InputContainer>

                            <input onChange={this.props.onChangeBusca} placeholder="Título ou descrição" />
                        </InputContainer>
                    </LabelContainer>
                    <SelectContainer>
                        <label>Ordenar por</label>
                        <select
                            onChange={this.props.onChangeOrdenacao}>
                            <option value="maior-preco">Maior preço</option>
                            <option value="menor-preco">Menor preço</option>
                            <option value="titulo">Titulo</option>
                            <option value="prazo">Prazo</option>
                        </select>
                    </SelectContainer>

                </FiltroContainer>

                {this.props.renderizarCards}
            </MainContainer>
        );
    }
}