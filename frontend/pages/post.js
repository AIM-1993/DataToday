import Layout from '../comps/Layout.js'
import {withRouter} from 'next/router'


export default withRouter((props) => (
  <Layout>
   <h1>{props.router.query.title}</h1>
   <style jsx global>{`
  `}</style>
  </Layout>
))