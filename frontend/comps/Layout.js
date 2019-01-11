import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


const containerStyle = {
  marginTop: '20px',
  marginLeft: '20%',
  marginBottom: '-50px',
  backgroundColor: '#F4F7F8',
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = function (props) {
  return(
    <div>
      <Head>
        <title>DataToday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"></link>
      </Head>
      <Navbar />
      {/* Container */}
      <div className="container" style={containerStyle}>
        { props.children }
      </div>
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