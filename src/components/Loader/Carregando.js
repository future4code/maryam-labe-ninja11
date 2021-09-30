import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"

const DivLoader = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3f3fb;
`

export default class App extends React.Component {
  render() {
    return (
      <DivLoader>
      <Loader
        type="Oval"
        color="#8265c9"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </DivLoader>
    )
  }
}
