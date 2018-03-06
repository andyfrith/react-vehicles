import React from 'react';
import { shallow } from 'enzyme';
import Car from './index';

describe( 'components.car', () => {
  it( 'renders without crashing', () => {
    shallow( <Car car={{}} /> );
  } );
} );
