import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import './CreatePost.css';

type Props = {
  isAuth: boolean;
};

export default function CreatePost({ isAuth }: Props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  // Reference to the collection in firebase
  const postsCollectionRef = collection(db, 'posts');

  // Get current user uid
  let userUid: string;
  onAuthStateChanged(auth, (user) => {
    if (user) userUid = user.uid;
  });

  const createPost = async (): Promise<void> => {
    await addDoc(postsCollectionRef, {
      title,
      text,
      author: { id: userUid },
    });
    navigate('/');
  };

  // Check if user is authenticated
  useEffect((): void => {
    if (!isAuth) {
      navigate('/');
    }
  }, []);

  return (
    <div className="create-post-page" data-testid="create-post-page">
      <div className="create-post__container">
        <h1>Create Post</h1>
        <div className="create-post__input-group">
          <label htmlFor="create-post__title-input">Title:</label>
          <input
            id="create-post__title-input"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="create-post__input-group">
          <label htmlFor="create-post__textarea">Text:</label>
          <textarea
            id="create-post__textarea"
            rows={10}
            cols={40}
            placeholder="Text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          className="create-post__btn"
          disabled={!title || !text}
          onClick={createPost}
        >
          Submit
        </button>
        <button className="create-post__btn" onClick={() => navigate('/')}>
          Cancel
        </button>
      </div>
    </div>
  );
}
