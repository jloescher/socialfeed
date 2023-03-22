import React from 'react';
import Post from './post';

const displayPosts = (posts) => {
  if (posts.length >= 1) {
    return (
      posts.map(post => (
        <Post key={post.id} post={post} />
      ))
    )
  } else {
    return <h4>Sorry, no posts yet. Add one!</h4>
  }

}

const PostList = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {displayPosts(posts)}
    </div>
  );
}

export default PostList;