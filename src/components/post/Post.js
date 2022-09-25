import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmDialog from '../confirmDialog/ConfirmDialog';
import './Post.css';

export default function Post({ post, deletePost, isAuth }) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const toggleShowConfirmDialog = () => {
    setShowConfirmDialog(!showConfirmDialog);
  };

  const handleDelete = (choose, id) => {
    if (choose) deletePost(id);
    toggleShowConfirmDialog();
  };

  return (
    <>
      {showConfirmDialog && (
        <ConfirmDialog handleDelete={handleDelete} postId={post.id} />
      )}
      <div className="post">
        <div className="post-container">
          <div className="post-title-bar">
            <h2>{post.title}</h2>
          </div>
          <div className="post-text-container">
            <p className="post-text">{post.text}</p>
          </div>
          {isAuth && (
            <div className="post-controls">
              <Link to="/edit" state={{ post }} className="post-btn">
                Edit Post
              </Link>
              <button className="post-btn" onClick={toggleShowConfirmDialog}>
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
