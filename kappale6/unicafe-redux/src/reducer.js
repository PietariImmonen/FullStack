const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const changed1 = {
        ...state,
        good: state.good + 1
      }
      return changed1
    case 'OK':
      const changed2 = {
        ...state,
        ok: state.ok + 1
      }
      return changed2
    case 'BAD':
      const changed = {
        ...state,
        bad: state.bad +1
      }
      return changed
    case 'ZERO':
      return state
    default: return state
  }
  
}

export default counterReducer