import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../pages/about/about.component';

it('expect to render AboutPage component', () => {
  expect(shallow(<AboutPage />)).toMatchSnapshot();
})
