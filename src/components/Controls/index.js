import React, { Component } from 'react';
import store from '../../store.js';
import { showAnswer, goToNext } from '../../actions';

import { Button, ButtonTransparent } from 'rebass'


class Controls extends Component {
  render() {
    return (
      <div>
        <ButtonTransparent mr={268} onClick={e => this.showAnswer()}>show answer</ButtonTransparent>
        <Button mr={10} onClick={e => this.goToNext()}>&rarr;</Button>
      </div>
    )
  }

  showAnswer() {
    store.dispatch(showAnswer());
  }

  goToNext() {
    store.dispatch(goToNext());
  }
}

export default Controls
