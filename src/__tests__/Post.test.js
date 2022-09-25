import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Post from '../components/post/Post';

describe('<Post /> component', () => {
  it('render edit buttons if user is logged in', () => {
    render(
      <BrowserRouter>
        <Post
          isAuth={true}
          post={{ id: '1', title: 'Mock Title', text: 'Mock Text' }}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Edit Post')).toBeInTheDocument();
    expect(screen.getByText('Delete Post')).toBeInTheDocument();
  });

  it('do not render edit buttons if user is not logged in', () => {
    render(
      <BrowserRouter>
        <Post
          isAuth={false}
          post={{ id: '1', title: 'Mock Title', text: 'Mock Text' }}
        />
      </BrowserRouter>
    );
    expect(screen.queryByText('Edit Post')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete Post')).not.toBeInTheDocument();
  });
});
