import { useState } from "react";
import './App.css';

import PostList from './components/postlist';
import CreatePostForm from './components/createpostform';
import Navbar from "./components/navbar";


function App() {
  const [posts, setPosts] = useState([]);

  function handleCreatePost(post) {
    setPosts([...posts, post]);
  }

  return (
    <div>
      <Navbar />
      <CreatePostForm onSubmit={handleCreatePost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
