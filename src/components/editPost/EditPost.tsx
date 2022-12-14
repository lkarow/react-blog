import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import './EditPost.css';

type PostType = {
  id: string;
  title: string;
  text: string;
  author: {
    id: string;
  };
};

export default function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();

  const { post }: any = location.state as PostType;

  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  // Reference to the collection in firebase
  const postRef = doc(db, 'posts', post.id);

  const handleChangePost = (input: any, category: string): void => {
    if (category === 'title') setTitle(input);
    if (category === 'text') setText(input);
  };

  const navigateToHome = (): void => {
    navigate('/');
  };

  const handleSubmit = async (): Promise<void> => {
    await updateDoc(postRef, {
      title: title,
      text: text,
    });
    navigateToHome();
  };

  return (
    <div className="edit-post" data-testid="edit-post">
      <div className="edit-post__container">
        <h1>Edit Post</h1>
        <div className="edit-post__input-group">
          <label htmlFor="edit-post__title-input">Title:</label>
          <input
            id="edit-post__title-input"
            value={title}
            onChange={(e) => handleChangePost(e.target.value, 'title')}
          />
        </div>
        <div className="edit-post__input-group">
          <label htmlFor="edit-post__textarea">Text:</label>
          <textarea
            id="edit-post__textarea"
            rows={10}
            cols={40}
            value={text}
            onChange={(e) => handleChangePost(e.target.value, 'text')}
          />
        </div>
        <button
          className="edit-post__btn"
          disabled={!title || !text}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="edit-post__btn" onClick={navigateToHome}>
          Cancel
        </button>
      </div>
    </div>
  );
}
