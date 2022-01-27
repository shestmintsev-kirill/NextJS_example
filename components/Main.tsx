import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type MainPropsType = {
  children: React.ReactNode;
  title?: string;
};

export const Main = ({ children, title = 'Next App' }: MainPropsType) => {
  return (
    <>
      <Head>
        <title>{title} | Next.js</title>
        <meta name="keywords" content="next, react" />
        <meta name="description" content="next, react, example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          padding: 1rem;
          padding-top: 60px;
        }
      `}</style>
    </>
  );
};
