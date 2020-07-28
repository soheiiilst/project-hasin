import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../component/error-boundary/error-boundary.component';

it('expect to render ErrorBoundary component', () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})
