import React, { useState } from "react";
import Like from "./like.svg";

const Post = ({username, content, likes}) => {
    const [count, setCount] = useState(likes);

 const increment = () => {
    setCount(count + 1);
  };
    return (
        <div className='max-w-sm w-full px-4 py-3 mx-auto bg-white shadow-md rounded-md my-8'>
                <div>
                <h1 className="text-lg font-semibold text-gray-800 mt-2">{username}</h1>
                <p className="text-gray-600 text-xl mt-2">"{content}"</p>
            </div>
            <div className="flex items-center justify-center mt-4">
            <div className="container flex flex-col items-center justify-center">
      <p className="text-center">{count}</p>
      <button onClick={increment()}>
        <img src={Like} alt="Like" className="w-8 h-8" />
      </button>
    </div>
                                    </div>
            </div>
    )
}

export default Post


