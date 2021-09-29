import React from 'react';
import {
  Container,
  Titulo,
  Header1,
  Header2,
  Header3,
  Header4,
  TextoCorpo,
  TextoCorpoStrong,
  TextoLink,
  Header5
} from './Estilos';

export default class EstilosAplicados extends React.Component {
  render() {
    return (
      <Container>
        <Titulo>Título</Titulo>
        <Header1>Header 1</Header1>
        <Header2>Header 2</Header2>
        <Header3>Header 3</Header3>
        <Header4>Header 4</Header4>
        <Header5>Header 5</Header5>
        <TextoCorpo>Texto corpo</TextoCorpo>
        <TextoCorpoStrong>Texto corpo strong</TextoCorpoStrong>
        <TextoLink>Texto link</TextoLink>
      </Container>
    )
  }
}

