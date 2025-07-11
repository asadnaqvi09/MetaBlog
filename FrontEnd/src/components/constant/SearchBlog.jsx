import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogCard from '../Constant/Cards.jsx';
import blogData from '../../blogPosts.json';
import Footer from './components/Footer';

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
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {searchResults.map((item) => (
              <BlogCard key={item.uniqueID} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-2xl font-bold text-center text-red-500">No Blogs Found Related to this Search.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SearchBlog;
