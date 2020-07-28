import { actionTypes } from '../redux/card/card.action-types.js';
import * as actions from '../redux/card/card.actions';

it('Should create an action to REQUEST_CARDS_PENDING', () => {
  const expectedAction = {
    type: actionTypes.REQUEST_CARDS_PENDING
  };
  expect(actions.requestCardsPending()).toEqual(expectedAction);
});

it('Should create an action to REQUEST_CARDS_SUCCESS', () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@email.com'
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john@email.com'
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'john@email.com'
    }
  ];
  const expectedAction = {
    type: actionTypes.REQUEST_CARDS_SUCCESS,
    payload: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com'
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'john@email.com'
      },
      {
        id: 3,
        name: 'John Doe',
        email: 'john@email.com'
      }
    ]
  };
  expect(actions.requestCardsSuccess(users)).toEqual(expectedAction);
});

it('Should create an action to REQUEST_CARDS_FAILED', () => {
  const error = 'Error!!!!';
  const expectedAction = {
    type: actionTypes.REQUEST_CARDS_FAILED,
    payload: 'Error!!!!'
  };
  expect(actions.requestCardsFailed(error)).toEqual(expectedAction);
});