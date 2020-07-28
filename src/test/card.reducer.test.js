import { actionTypes } from '../redux/card/card.action-types.js';
import cardReducer from '../redux/card/card.reducer';
const INITIAL_STATE = {
  isPending: false,
  users: [],
  selectedCard: {},
  error: null
};

describe('requestCards', () => {
  it('Should return the initial state', () => {
    expect(cardReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('Should handle REQUEST_CARDS_PENDING action', () => {
    expect(
      cardReducer(INITIAL_STATE, {
        type: actionTypes.REQUEST_CARDS_PENDING,
        payload: true
      })
    ).toEqual({
      isPending: true,
      users: [],
      selectedCard: {},
      error: null
    });
  });

  it('Should handle REQUEST_CARDS_SUCCESS action', () => {
    expect(
      cardReducer(INITIAL_STATE, {
        type: actionTypes.REQUEST_CARDS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@email.com'
          }
        ]
      })
    ).toEqual({
      isPending: false,
      users: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@email.com'
        }
      ],
      selectedCard: {},
      error: null
    });
  });

  it('Should handle REQUEST_CARDS_FAILED action', () => {
    expect(
      cardReducer(INITIAL_STATE, {
        type: actionTypes.REQUEST_CARDS_FAILED,
        payload: 'Error!!!!'
      })
    ).toEqual({
      isPending: false,
      users: [],
      selectedCard: {},
      error: 'Error!!!!'
    });
  });

  it('Should handle SELECT_CARD action', () => {
    expect(
      cardReducer(INITIAL_STATE, {
        type: actionTypes.SELECT_CARD,
        payload: {
          id: 1,
          name: 'John Doe',
          email: 'john@email.com'
        }
      })
    ).toEqual({
      isPending: false,
      users: [],
      selectedCard: {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com'
      },
      error: null
    });
  });

  const SEC_STATE = {
    isPending: false,
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com'
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john@email.com'
      }
    ],
    selectedCard: {},
    error: null
  };
  it('Should handle DELETE_CARD action', () => {
    expect(
      cardReducer(SEC_STATE, {
        type: actionTypes.DELETE_CARD,
        payload: 1
      })
    ).toEqual({
      isPending: false,
      users: [
        {
          id: 2,
          name: 'John Doe',
          email: 'john@email.com'
        }
      ],
      selectedCard: {},
      error: null
    });
  });
});
