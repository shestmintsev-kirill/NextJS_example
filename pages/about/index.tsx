import Router from 'next/router';
import { Main } from '../../components/Main';

export default function About({ title }) {
  return (
    <Main>
      <h1>{title}</h1>
      <br />
      <button onClick={() => Router.push('/')}>Go back to home</button>
    </Main>
  );
}

About.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/about`);
  const data = await res.json();
  return {
    title: data.title
  };
};
