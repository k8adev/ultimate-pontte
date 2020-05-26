import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

const wrapper = shallow(
  <Card />,
);

describe('Typography', () => {
  it('should be render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
