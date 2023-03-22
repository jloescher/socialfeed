import React, { useState } from 'react'
import './likedislikebuttons.css'

function LikeDislikeButtons() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  }

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  }

  return (
    <div>
      <button
        id="like-button"
        className={isLiked ? "active" : ""}
        onClick={handleLikeClick}
      >
        <svg className="h-5 w-5 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
          <path d="M465.6 89.6c-22.4-22.4-57.6-22.4-80 0L217.6 273.6 126.4 182.4c-22.4-22.4-57.6-22.4-80 0s-22.4 57.6 0 80l112 112c11.2 11.2 25.6 16.8 40 16.8s28.8-5.6 40-16.8l240-240c22.4-22.4 22.4-57.6 0-80z" />
        </svg>
        Like
      </button>
      <button
        id="dislike-button"
        className={isDisliked ? "active" : ""}
        onClick={handleDislikeClick}
      >
        <svg className="h-5 w-5 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
          <path d="M465.6 89.6c-22.4-22.4-57.6-22.4-80 0L217.6 273.6 126.4 182.4c-22.4-22.4-57.6-22.4-80 0s-22.4 57.6 0 80l112 112c11.2 11.2 25.6 16.8 40 16.8s28.8-5.6 40-16.8l240-240c22.4-22.4 22.4-57.6 0-80z" />
        </svg>
        Dislike
      </button>
    </div >
  );
}

export default LikeDislikeButtons