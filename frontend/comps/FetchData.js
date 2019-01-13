import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
export default class FetchData extends React.Component {
  state = {
    shows: []
  }

  onClick = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
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
        <h4 className="page-header">Shows are:</h4>
        <button onClick={this.onClick}>Fetching</button>
        <ul>{this.state.shows.map(({show}) => (
          <li key={show.id}>{show.name}</li>
        ))}</ul>
      </div>
    )
  }
}
