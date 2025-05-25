import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import categories from '../../json files/category.json'
import blogPosts from '../../json files/blogPosts.json'

function BlogsSelection() {
  const [activeCategory, setActiveCategory] = useState('Technology')
  // Filter blog posts based on the active category
  const filteredBlogs = blogPosts.filter(blog => blog.category === activeCategory);

  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-20 py-4 mb-10 relative'>
      <h1 className='text-2xl font-bold text-center mb-2'>Choose A Category</h1>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-box w-64 h-72 rounded-lg shadow-md overflow-hidden cursor-pointer ${activeCategory === category.name ? 'bg-yellow-200' : 'bg-white'
              }`}
            onClick={() => setActiveCategory(category.name)}
          >
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{activeCategory} Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogs.map(blog => (
            <div
              key={blog.uniqueID}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <Link to={`/blogs/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-gray-600">{blog.description}</p>
                </div>
                <div className="info flex sm:flex-row px-2 py-2 justify-between items-start sm:items-center sm:mt-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <img
                      src={blog.authorImage}
                      alt={blog.authorName}
                      className="author-image w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
                    />
                    <div className="author-name text-sm sm:text-base text-slate-800">{blog.authorName}</div>
                  </div>
                  <div className="date text-sm sm:text-base text-slate-800">{blog.date}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsSelection