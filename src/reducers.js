import { combineReducers } from 'redux';

const initialState = {
  answerHidden: true,
  nextCard: false
}

function changeState(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ANSWER':
      return Object.assign({}, state, {
        answerHidden: false,
        nextCard: false
      })
    case 'NEXT_CARD':
      return Object.assign({}, state, {
        answerHidden: true,
        nextCard: true
      })
    default:
      return state;
  }
}


const flashcardApp = combineReducers({
  changeState
})


export default flashcardApp;
