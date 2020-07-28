import { createSelector } from 'reselect';

const selectCards = state => state.cards;

export const selectCardUsers = createSelector(
  [selectCards],
  cards => cards.users
);

export const selectCard = createSelector(
  [selectCards],
  cards => cards.selectedCard
);
