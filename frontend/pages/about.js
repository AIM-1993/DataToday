import Link from 'next/link'

export default () => {
  return(
    <div>
      <h1>This is about page</h1>
      <Link href="/">
        <a style={{ fontsize: 20 }}>Home Page</a>
      </Link>
    </div>
  );
}