import React from 'react';
import './ConfirmDialog.css';

type Props = {
  handleDelete: any;
  postId: string;
};

export default function ConfirmDialog({ handleDelete, postId }: Props) {
  const handleClick = (boolean: boolean): void => {
    handleDelete(boolean, postId);
  };

  return (
    <div className="dialog-overlay" data-testid="dialog-overlay">
      <dialog className="confirm-dialog">
        <div className="confirm-dialog__content">
          <h2 className="confirm-dialog__title">Please confirm</h2>
          <p>Do you really want to delete this post?</p>
        </div>
        <form method="dialog" className="confirm-dialog__form">
          <button
            className="confirm-dialog__btn confirm-dialog__yes-btn"
            onClick={() => handleClick(true)}
          >
            Yes
          </button>
          <button
            className="confirm-dialog__btn confirm-dialog__no-btn"
            onClick={() => handleClick(false)}
          >
            No
          </button>
        </form>
      </dialog>
    </div>
  );
}
