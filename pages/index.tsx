import Link from 'next/link';
import { Main } from '../components/Main';

export default function Home() {
  return (
    <Main title={'Home Page'}>
      <main>
        <h1 className="title">
          Welcome to-
          <Link href={'/about'}>about</Link>
          <br />
          <Link href={'/posts'}>posts</Link>
        </h1>
      </main>

      <footer>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Main>
  );
}
