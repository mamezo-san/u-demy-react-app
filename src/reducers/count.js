import { INCREMENT,DECREMENT } from '../actions'

const initialState = { value: 0 }

export defoult (state = initialState,action) => {
  switch(action.type) {
    case INCREMENT:
      return { value: state.value + 1 } 
    case DECREMENT:
      return { value: state.value - 1 } 
    defoult:
      return state
  }
}
