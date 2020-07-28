import axios from 'axios';
import { actionTypes } from './card.action-types';

export const requestCardsPending = () => ({
  type: actionTypes.REQUEST_CARDS_PENDING
});

export const requestCardsSuccess = users => ({
  type: actionTypes.REQUEST_CARDS_SUCCESS,
  payload: users.filter(user => user.id < 4)
});

export const requestCardsFailed = error => ({
  type: actionTypes.REQUEST_CARDS_FAILED,
  payload: error
});

export const requestCards = () => dispatch => {
  dispatch(requestCardsPending());
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => dispatch(requestCardsSuccess(response.data)))
    .catch(error => dispatch(requestCardsFailed(error)));
};

export const selectCard = user => ({
  type: actionTypes.SELECT_CARD,
  payload: user
});

export const deleteCard = cardId => ({
  type: actionTypes.DELETE_CARD,
  payload: cardId
});
