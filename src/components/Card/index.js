import React, { Component } from 'react'
import { flashcardData } from '../../data.js'
import store from '../../store.js'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { Box, Divider, Heading, Link, Text } from 'rebass'

const StyledCard = styled(Box)`
  width: 450px;
  min-height: 300px;
  background-color: white;
  border-radius: 3px;
  text-align: left;
`

class Card extends Component {
  constructor(props) {
    super(props);
    if (!store.getState().changeState.nextCard) {
      this.randomNumber = Math.floor((Math.random() * flashcardData.length));
    }
  }

  render() {
    if (store.getState().changeState.nextCard) {
      this.randomNumber = Math.floor((Math.random() * flashcardData.length));
    }
    this.props.answerHidden.answerHidden = store.getState().changeState.answerHidden;

    return (
      <StyledCard p={4} mb={3}>
        <Heading f={4} is='h1'>
          {flashcardData[this.randomNumber].question}
        </Heading>

        <Divider color='lightgray' />

        <div style={{display: this.props.answerHidden.answerHidden ? 'none' : 'block'}}>
          <Text f={2} mt={3} mb={4}>
            {flashcardData[this.randomNumber].answer}
          </Text>

          <Text f={1}>
            Source: <Link target='_blank' href={flashcardData[this.randomNumber].sourceUrl}>
              {flashcardData[this.randomNumber].source}
            </Link>
          </Text>
        </div>
      </StyledCard>
    )
  }
}

function mapStateToProps(state) {
  return { answerHidden: state.changeState }
}

export default connect(mapStateToProps)(Card)
