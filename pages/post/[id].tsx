import { useRouter } from 'next/router';
import { Main } from '../../components/Main';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { MyPost } from '../../types/post';

type PostPropsType = {
  post: MyPost;
};

export default function Post({ post: serverPost }: PostPropsType) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    };
    if (!serverPost) load();
  }, []);

  if (!post) {
    return (
      <Main>
        <h1>Loading...</h1>
      </Main>
    );
  }

  return (
    <Main>
      <h1>Post {router.query.id}</h1>
      <h3>{post.title}</h3>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}>Back to posts</Link>
    </Main>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) return { post: null };
  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: MyPost = await res.json();
  return {
    post
  };
};

// export async function getServerSideProps({ query, req }) {
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await res.json()
//   return {
//     props: { post }
//   }
// }
