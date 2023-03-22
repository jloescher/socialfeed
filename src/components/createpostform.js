import { useState } from "react";

function CreatePostForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, body });
    setName("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
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


export default CreatePostForm