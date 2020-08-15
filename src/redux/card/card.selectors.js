import { createSelector } from 'reselect';

const selectCards = state => state.cards;

export const selectCardUsers = createSelector([selectCards], cards =>
  cards.users.length > 0 ? cards.users : []
);

export const selectCard = createSelector(
  [selectCards],
  cards => cards.selectedCard
);

export const selectUser = userUrlParam =>
  createSelector([selectCardUsers], users =>
    users != null ? users[userUrlParam - 1] : null
  );

export const selectIsPending = createSelector(
  [selectCards],
  cards => cards.isPending
);

export const selectIsCardsLoaded = createSelector([selectCards], cards =>
  cards.users.length > 0 ? true : false
);
