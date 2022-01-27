import { useEffect, useState } from 'react';
import { Main } from '../components/Main';
import Link from 'next/link';
import { MyPost } from '../types/post';
import { NextPageContext } from 'next';

export type PostsPropsType = {
  posts: MyPost[];
};

export default function Posts({ posts: serverPosts }: PostsPropsType) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${process.env.API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (!serverPosts) load();
  }, []);

  if (!posts) {
    return (
      <Main>
        <h1>Loading...</h1>
      </Main>
    );
  }

  return (
    <Main title={'Post page'}>
      <h1>PostsPage</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/post/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </Main>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) return { posts: null };
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await res.json();
  return {
    posts
  };
};
