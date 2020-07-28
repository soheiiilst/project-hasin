import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from '../component/infobox/infobox.component';

it('expect to render InfoBox component', () => {
  expect(shallow(<InfoBox />)).toMatchSnapshot();
})
