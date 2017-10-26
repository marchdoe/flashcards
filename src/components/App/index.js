import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Heading,
  Provider } from 'rebass'

import Card from '../Card'
import Controls from '../Controls'

const Wrapper = styled(Flex)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  text-align: center;
  padding: 40px 0 70px;
`

// const StyledMain = styled(Box)`
//   flex: 1;
//   background-color: #f1f1f1;
// `

class App extends Component {
  render () {
    return (
      <Provider>
        <Wrapper>
          <Heading mb={4} f={5} is='h1'>React Flashcards</Heading>
          <Card />
          <Controls />
        </Wrapper>
      </Provider>
    )
  }
}

export default App
