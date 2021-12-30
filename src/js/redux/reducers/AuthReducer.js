export const initialState = {

}

export function AuthReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      }
    case 'REGISTER': {
      return {
        user: action.payload
      }
    }
    default:
      return state
  }
}
