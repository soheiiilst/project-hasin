import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../component/navbar/navbar.component';

it('expect to render Navbar component', () => {
  expect(shallow(<Navbar />)).toMatchSnapshot();
})
