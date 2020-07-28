import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Card from '../component/card/card.component';

it('expect to render Card component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Card />
      </Provider>
    )
  ).toMatchSnapshot();
});
