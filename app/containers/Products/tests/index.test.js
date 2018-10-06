import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Products from '../index';
import messages from '../messages';

describe('<Products />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Products />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
