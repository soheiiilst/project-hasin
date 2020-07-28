import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailPage from '../pages/detail/detail.component';

it('expect to render DetailPage component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <DetailPage />
      </Provider>
    )
  ).toMatchSnapshot();
});
