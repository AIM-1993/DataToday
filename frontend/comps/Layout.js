import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';


const Layout = function (props) {
  return(
    <div>
      <Head>
        <title>DataToday</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"></link>
      </Head>
      <Header />
      { props.children }
      <Footer />
    </div>
  );
}

// const Layout = (props) => (
//   <div style={layoutStyle}>
//     <Header />
//     { props.children }
//   </div>
// )

export default Layout