import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CardContainer from '../component/card-container/card-container.component';

it('expect to render CardContainer component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <CardContainer />
      </Provider>
    )
  ).toMatchSnapshot();
});
