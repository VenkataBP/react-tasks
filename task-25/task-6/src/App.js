import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let api = "https://jsonplaceholder.typicode.com/posts/";
    
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
      <api/>
        {this.state.posts.length > 0 ? (
          <p>
            {this.state.posts.map((post) => (
              <p key={post.id}>
                <pre>{JSON.stringify(post, null, 2)}</pre>
              </p>
            ))}
            </p>
        ) : (
          <p>No posts available</p>
        )}
        
      </div>
    );
  }
}

export default App;
