export const initialState = { count: 0 }

type ACTIONTYPE = { type: 'increment' | 'decrement'; payload: number }

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      throw new Error('NOT Found Reducer Action')
  }
}
