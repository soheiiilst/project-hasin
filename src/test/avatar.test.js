import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../component/avatar/avatar.component';

it('expect to render Avatar component', () => {
  expect(shallow(<Avatar />)).toMatchSnapshot();
})
