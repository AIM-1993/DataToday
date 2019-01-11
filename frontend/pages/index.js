import Layout from '../comps/Layout.js'
import Link from 'next/link'
import Header from '../comps/Header';

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const indexStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}


export default () => (
  <div>
    <Layout>
      <div style={indexStyle}>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map((post) => (
              <PostLink key={post.id} post={post}/>
            ))}
        </ul>
        <button className="btn btn-primary">Button</button>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}
        </style>
      </div>

    </Layout>
  </div>
)