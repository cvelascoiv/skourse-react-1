import React, { useState } from "react";
import Like from "../like.svg";
import Eye from "../eye.svg";

const Post = ({
  id,
  username,
  avatar,
  title,
  content,
  likes,
  incrementHandler,
  visibilityHandler,
}) => {
  return (
    <div className="max-w-sm w-full px-4 py-3 mx-auto bg-white shadow-md rounded-md my-4">
      <div className="flex items-center mb-4 relative">
        <img
          alt="avatar"
          className="w-20 rounded-full border-2 border-gray-300"
          src={avatar}
        />
        <div id="header-text" className="leading-5 ml-6 sm">
          <h4 id="name" className="text-xl font-semibold">
            {username}
          </h4>
          <h5 id="job" className="font-semibold text-blue-600">
            {title}
          </h5>
        </div>
        <div className="absolute right-0 top-0">
          <button onClick={() => visibilityHandler(id)}>
            <img src={Eye} alt="Visibility" className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div>
        <p className="italic text-gray-600 mt-2">"{content}"</p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="container flex flex-col items-center justify-center">
          <p className="text-center">{likes}</p>
          <button
            onClick={() => {
              incrementHandler(id);
            }}
          >
            <img src={Like} alt="Like" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
