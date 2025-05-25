import React from 'react';

function BlogCard({blog}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-2">{blog.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{blog.category}</span>
          <span>{blog.author}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">{blog.date}</div>
      </div>
    </div>
  );
}

export default BlogCard;