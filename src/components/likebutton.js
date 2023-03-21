import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  }

  return (
    <button
      className={`flex items-center text-gray-600 ${liked ? 'text-red-600' : ''}`}
      onClick={handleClick}
    >
      <svg className="h-5 w-5 fill-current mr-1" viewBox="0 0 20 20">
        <path d="M10 18.36l-8.94-5.23C.375 12.719 0 12.215 0 11.647V4.107c0-.568.375-1.072.939-1.252L10 0l9.061 2.855c.564.18.939.684.939 1.252v7.54c0 .568-.375 1.072-.939 1.252L10 18.36z" />
      </svg>
      {liked ? 'Dislike' : 'Like'}
    </button>
  );
}

export default LikeButton;
