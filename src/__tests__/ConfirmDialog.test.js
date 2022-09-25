import { render, screen } from '@testing-library/react';
import ConfirmDialog from '../components/confirmDialog/ConfirmDialog';

describe('<ConfirmDialog /> component', () => {
  it('render overlay', () => {
    render(<ConfirmDialog />);
    expect(screen.getByTestId('dialog-overlay')).toBeInTheDocument();
  });

  it('includes yes and no buttons', () => {
    render(<ConfirmDialog />);
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });
});
