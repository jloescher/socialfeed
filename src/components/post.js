import React, { useState } from 'react';
import LikeDislikeButtons from './likedislikebuttons';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(post.liked);

  const handleLikeClick = () => {
    setLiked(!liked);
  }

  return (
    <div className="border border-gray-400 p-4 rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-gray-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
      <LikeDislikeButtons liked={liked} onClick={handleLikeClick} className="mt-4" />
    </div>
  );
}

export default Post;
