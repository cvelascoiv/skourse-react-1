import { useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import postsDataFaker from "./postsDataFaker";
import Plus from "./plus.svg";
import Minus from "./minus.svg";

//using useState only
//useEffect and other hooks feature will be added later

const App = () => {
  const [posts, setPosts] = useState(postsDataFaker);
  const [showedPostsCount, setShowedPostsCount] = useState(10);

  const postToShow = posts
    .filter((post) => post.visible === true)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, showedPostsCount);

  const increment = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          post.likes++;
        }
        return post;
      })
    );
  };
  const toggleVisibility = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          post.visible = false;
        }
        return post;
      })
    );
  };

  const renderShowArrow = () => {
    if (postToShow.length !== 0 && showedPostsCount == 10) {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-semibold">Show more</p>
          <button
            className="text-center mx-auto"
            onClick={() => setShowedPostsCount(showedPostsCount + 10)}
          >
            <img src={Plus} alt="Like" className="w-8 h-8" />
          </button>
        </div>
      );
    } else if (
      posts.length &&
      posts.length > showedPostsCount &&
      postToShow.length !== 0
    ) {
      return (
        <>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-semibold">Show more</p>
            <button
              className="text-center mx-auto"
              onClick={() => setShowedPostsCount(showedPostsCount + 10)}
            >
              <img src={Plus} alt="Like" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-semibold">Show less</p>
            <button
              className="text-center mx-auto"
              onClick={() => setShowedPostsCount(showedPostsCount - 10)}
            >
              <img src={Minus} alt="Like" className="w-8 h-8" />
            </button>
          </div>
        </>
      );
    } else if (posts.length <= showedPostsCount) {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-semibold">Show less</p>
          <button
            className="text-center mx-auto"
            onClick={() => setShowedPostsCount(showedPostsCount - 10)}
          >
            <img src={Minus} alt="Like" className="w-8 h-8" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center font-semibold">No Posts to Display</p>
        </div>
      );
    }
  };

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="container w-full bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 dark:bg-gray-700">
        <div className="lg:col-span-8 col-span-1 flex flex-wrap my-2">
          {postToShow.map(
            (post) =>
              post.visible && (
                <Post
                  id={post.id}
                  username={post.username}
                  avatar={post.avatar}
                  title={post.title}
                  content={post.content}
                  likes={post.likes}
                  key={post.id}
                  visible={post.visible}
                  incrementHandler={increment}
                  visibilityHandler={toggleVisibility}
                />
              )
          )}
          <div className="flex items-center justify-center mt-4 mx-auto w-full">
            <div className="container flex items-center justify-center space-x-6">
              {renderShowArrow()}
            </div>
          </div>
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
