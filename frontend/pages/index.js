import Layout from '../comps/Layout.js'
import Link from 'next/link'


function getPosts () {
  return [
    { id: '安装'},
    { id: '如何使用'},
    { id: '用ZEIT进行部署'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.id}`}>
      <a className="btn">{post.id}</a>
    </Link>
    <style jsx>{`
      li {
        margin: 5px 0;
        list-style: none;
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

export default () => (
  <div>
    <Layout>
      <div>
        <h1 className="page-header">DataToday</h1>
        <ul className="navbar navbar-expand">
          {getPosts().map((post) => (
              <PostLink key={post.id} post={post}/>
            ))}
        </ul>
        <p className="text-muted">一款简易数据获取应用</p>
        <button className="btn btn-success">下载V1.0</button>
        <style jsx>{`
          ul {
            padding: 0;
          }
        `}
        </style>
      </div>
    </Layout>
  </div>
)