import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

describe('<Navbar /> component', () => {
  it('render Create Post link if user is logged in', () => {
    render(
      <BrowserRouter>
        <Navbar isAuth={true} />
      </BrowserRouter>
    );
    expect(screen.getByText('Create post')).toBeInTheDocument();
  });

  it('do not render Create Post link if user is not logged in', () => {
    render(
      <BrowserRouter>
        <Navbar isAuth={false} />{' '}
      </BrowserRouter>
    );
    expect(screen.queryByText('Create post')).not.toBeInTheDocument();
  });

  it('render login button and no logout button if user is not logged in', () => {
    render(
      <BrowserRouter>
        <Navbar isAuth={false} />
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('render logout button and no login button if user is logged in', () => {
    render(
      <BrowserRouter>
        <Navbar isAuth={true} />
      </BrowserRouter>
    );
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });
});
