import React, { useState } from "react";
const { faker } = require("@faker-js/faker");

const AddPost = ({ addPostHandler }) => {
  const [post, setPost] = useState({
    id: faker.datatype.uuid(),
    username: "",
    title: "",
    content: "",
    likes: 0,
    createdAt: Date.now(),
    visible: true,
    avatar: faker.image.avatar(),
  });

  const addPost = () => {
    if (post.username === "") {
      alert("empty username");
      return;
    }
    if (post.content === "") {
      alert("empty content");
      return;
    }
    if (post.title === "") {
      alert("empty title");
      return;
    }

    addPostHandler(post);

    setPost({
      id: faker.datatype.uuid(),
      username: "",
      title: "",
      content: "",
      likes: 0,
      createdAt: Date.now(),
      visible: true,
      avatar: faker.image.avatar(),
    });
  };

  return (
    <div className="flex mx-auto items-center justify-center shadow-lg max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Add a new comment
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="username"
              placeholder="Username"
              required
              value={post.username}
              onChange={(e) => {
                setPost({ ...post, username: e.target.value });
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <input
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="title"
              placeholder="Job Title"
              required
              value={post.title}
              onChange={(e) => {
                setPost({ ...post, title: e.target.value });
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="content"
              placeholder="Type Your Comment"
              required
              value={post.content}
              onChange={(e) => {
                setPost({ ...post, content: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">Feel free to tell.</p>
            </div>
            <div className="-mr-1">
              <input
                type="button"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
                onClick={addPost}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
