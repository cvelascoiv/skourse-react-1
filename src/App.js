import { useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Gian",
      content: "Gwapa kay ka",
      likes: 2,
      createdAt: 1642458275188,
    },
    {
      id: 2,
      username: "Shad",
      content: "Pogi ko",
      likes: 0,
      createdAt: 1642458275288,
    },
    {
      id: 3,
      username: "Carlos",
      content: "Hanging around",
      likes: 0,
      createdAt: 1642458275388,
    },
    {
      id: 4,
      username: "Reyner",
      content: "Pagod na ako!",
      likes: 0,
      createdAt: 1642458275488,
    },
  ]);

  const increment = (id) => {
    posts
      .filter((post) => post.id === id)
      .map((post) => {
        post.likes++;
      });
  };

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="container w-full bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 dark:bg-gray-700">
        <div className="lg:col-span-8 col-span-1 flex flex-wrap my-2">
          {posts
            .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
            .map((post) => (
              <Post
                id={post.id}
                username={post.username}
                content={post.content}
                likes={post.likes}
                key={post.id}
                incrementHandler={increment}
              />
            ))}
        </div>
        <div className="hidden md:block md:col-span-4 col-span-1 dark:bg-gray-700">
          <div className="lg:sticky relative mt-5 mr-3 top-8">
            <AddPost addPostHandler={addPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
