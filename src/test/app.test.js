import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App.js';

it('expect to render App component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toMatchSnapshot();
});
