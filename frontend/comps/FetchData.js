import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
export default class FetchData extends React.Component {
  columnStyle = {
    marginLeft: '4rem',
    marginTop: "",
  }

  cardStyle = {
    maxWidth: '20rem',
    margin: '0.2rem'
  }

  state = {
    shows: []
  }


  onClick = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json();
    console.log(`Data fetched.Count: ${data.length}`);
    this.setState({
      shows: data
    })
    console.log(this.state.shows);
    
  }

  render() {
    return (
      <div>
        <h4 className="page-header">各版本蝙蝠侠电影简介如下:</h4>
        <button className="btn btn-success" onClick={this.onClick}>点击获取</button>
        <hr />
        <div className="row" style={this.columnStyle}>
          {this.state.shows.map(({show}) => (
            <div className="card text-white bg-dark mb-3 col-lg-4" style={this.cardStyle} key={show.id}>
            <div className="card-header">《{show.name}》</div>
              <div className="card-body">
                <p className="card-text">
                  Premiered: {show.premiered}
                  <br />
                  <a className="text-info" href={show.url}>详情链接：{show.url}</a>
                </p>
              </div>      
            </div>
            ))}
        </div>
      </div>
    )
  }
}
