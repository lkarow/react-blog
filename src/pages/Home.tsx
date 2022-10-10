import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import Post from '../components/post/Post';

type PostType = {
  id: string;
  title?: string;
  text?: string;
  author?: {
    id: string;
  };
};

type Props = {
  isAuth: boolean;
};

export default function Home({ isAuth }: Props) {
  const [postLists, setPostLists] = useState<PostType[]>([
    {
      id: '',
      title: '',
      text: '',
      author: {
        id: '',
      },
    },
  ]);

  const postsCollectionRef = collection(db, 'posts');

  const getPosts = async (): Promise<void> => {
    const data = await getDocs(postsCollectionRef);
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePost = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, 'posts', id));
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-page" data-testid="home-page">
      {postLists.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            isAuth={isAuth}
          />
        );
      })}
    </div>
  );
}
