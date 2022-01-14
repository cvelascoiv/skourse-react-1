import React from 'react';

import Post from './Post';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {name: "Gian", content:"Gwapa kay ka", likes:2},
        {name: "Shad", content:"Pogi ko", likes:0},
        {name: "Carlos", content:"Hanging around", likes:0},
        {name: "Reyner", content:"Pagod na ako!", likes:0},
      ]
    }
  }


  render() {
    return (
      <div className='container w-full bg-gray-300'>
        <div className='container max-w-7xl mx-auto flex flex-wrap items-center h-screen'>

        {this.state.posts.map(post => (
          <Post name={post.name} content={post.content} likes={post.likes} key={post.name} />
        ))}
      </div>
        </div>
    );
  }}


export default App;
