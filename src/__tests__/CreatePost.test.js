import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreatePost from '../pages/CreatePost';
import React from 'react';

describe('<CreatePost /> component', () => {
  it('render create post page', () => {
    render(
      <BrowserRouter>
        <CreatePost isAuth={true} />
      </BrowserRouter>
    );

    expect(screen.getByTestId('create-post-page')).toBeInTheDocument();
  });

  it('render input, textarea and submit button', () => {
    render(
      <BrowserRouter>
        <CreatePost isAuth={true} />
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Text:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
