import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../pages/homepage/homepage.component';

it('expect to render HomePage component', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
