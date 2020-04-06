import React from 'react';
import { render } from '@testing-library/react';

import Wrapper from '.';

describe('Wrapper', () => {
  it('firstChild should be defined', () => {
    const { container } = createComponent();
    expect(container.firstChild).toBeDefined();
  })

  it('react component should be render normally', () => {
    const props = {
      children: <h1>H1 Example</h1>
    };

    const { getAllByText } = createComponent(props);
    expect(getAllByText(/H1 Example/)).toHaveLength(1);
  });
});

const createComponent = (overrideProps = {}) => {
  const props = {
    children: <div />,
    ...overrideProps
  };

  return render(<Wrapper {...props} />);
}