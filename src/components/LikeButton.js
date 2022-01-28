import React, { useState } from "react";
import Like from "../like.svg";

//currently not used until additional hooks
const LikeButton = ({ likes }) => {
  const [count, setCount] = useState(likes);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <p className="text-center">{count}</p>
      <button onClick={increment}>
        <img src={Like} alt="Like" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default LikeButton;
