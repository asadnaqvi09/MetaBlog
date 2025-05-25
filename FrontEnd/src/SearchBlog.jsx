import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/constant/Navbar';
import BlogCard from './components/constant/Cards';
import blogData from './json files/blogPosts.json';
import Footer from './components/constant/Footer';

function SearchBlog() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('search');

    if (query) {
      const filteredResults = blogData.filter(blog =>
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.category.toLowerCase().includes(query.toLowerCase()) ||
        blog.authorName.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchResults.map((item) => (
              <div key={item.uniqueID} className="bg-white rounded shadow-md p-4">
                <BlogCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <p className='text-2xl font-bold text-center text-red-500'>No Blogs Found Related to this Search.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchBlog;