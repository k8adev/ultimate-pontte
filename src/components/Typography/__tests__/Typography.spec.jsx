import React from 'react';
import { shallow } from 'enzyme';

import Typography from '../Typography';

const wrapper = shallow(
  <Typography>Hey, hire me!</Typography>,
);

describe('Typography', () => {
  it('should be render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
