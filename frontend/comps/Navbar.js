import Link from 'next/link'


const Navbar = () => (
  <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>
      {`
        #navbar {
          font-size: 20px;
          background: #08bb;
          padding: 15px;
        }

        a {
          text-decoration: none;
          color: #fff;
          margin-right: 15px;

        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </nav>
)

export default Navbar