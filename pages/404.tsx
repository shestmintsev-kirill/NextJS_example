import Link from 'next/link';
import style from '../styles/error.module.scss';

export default function ErrorPage() {
  return (
    <>
      <h1 className={style.error}>Error 404</h1>
      <p>Please <Link href={'/'}>Go back</Link> to safety</p>
    </>
  )
};
