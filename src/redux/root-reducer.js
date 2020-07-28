import { combineReducers } from 'redux';

import cardReducer from './card/card.reducer';

const rootReducer = combineReducers({
  cards: cardReducer
});

export default rootReducer;
