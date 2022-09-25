import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditPost from '../components/editPost/EditPost';

describe('<EditPost /> component', () => {
  it('render input for title and textarea for text', () => {
    const post = { id: '1', title: 'Mock Title', text: 'Mock Text' };
    render(
      <MemoryRouter initialEntries={[{ state: { post } }]}>
        <EditPost />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Text:')).toBeInTheDocument();
  });

  it('render submit btn', () => {
    const post = { id: '1', title: 'Mock Title', text: 'Mock Text' };
    render(
      <MemoryRouter initialEntries={[{ state: { post } }]}>
        <EditPost />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('render cancel btn', () => {
    const post = { id: '1', title: 'Mock Title', text: 'Mock Text' };
    render(
      <MemoryRouter initialEntries={[{ state: { post } }]}>
        <EditPost />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('if title and text is not empty submit button is not disabled', () => {
    const post = { id: '1', title: 'Mock Title', text: 'Mock Text' };
    render(
      <MemoryRouter initialEntries={[{ state: { post } }]}>
        <EditPost />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: 'Submit' })).not.toBeDisabled();
  });

  it('if title and text is empty submit button is disabled', () => {
    const post = { id: '1', title: '', text: '' };
    render(
      <MemoryRouter initialEntries={[{ state: { post } }]}>
        <EditPost />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });
});
