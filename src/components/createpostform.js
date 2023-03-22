import { useState } from "react";

function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that title and content are not empty
    if (!title.trim() || !content.trim()) {
      return;
    }

    const newPost = {
      title,
      content,
      date: Date.now()
    };
    onSubmit(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="btn btn-blue"
        >
          Create post
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;
