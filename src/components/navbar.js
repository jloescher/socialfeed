import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between shadow-lg drop-shadow-lg mb-10">
      <div className="text-2xl font-bold">
        <a href="/">SocialFeed</a>
      </div>
    </nav>
  );
}

export default Navbar
