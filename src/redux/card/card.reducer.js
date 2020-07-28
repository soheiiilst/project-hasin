import { actionTypes } from './card.action-types';

const INITIAL_STATE = {
  isPending: false,
  users: [],
  selectedCard: {},
  error: null
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CARDS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case actionTypes.REQUEST_CARDS_SUCCESS:
      return {
        ...state,
        isPending: false,
        users: action.payload
      };
    case actionTypes.REQUEST_CARDS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case actionTypes.SELECT_CARD:
      return {
        ...state,
        selectedCard: action.payload
      };
    case actionTypes.DELETE_CARD:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cardReducer;
