import React from 'react';
import { shallow } from 'enzyme';
import Button from '../component/button/button.component';

it('expect to render Button component', () => {
  expect(shallow(<Button />)).toMatchSnapshot();
})
