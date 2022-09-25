import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  it('render home page', () => {
    render(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('display navigation', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
