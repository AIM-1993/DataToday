import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = function (props) {
  return(
    <div style={layoutStyle}>
    <Header />
    { props.children }
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