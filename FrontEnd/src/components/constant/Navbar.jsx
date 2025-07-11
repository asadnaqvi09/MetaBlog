import React, { useState, useEffect } from 'react';
import logo from '../../../public/Meta-Blog.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate, Link } from 'react-router-dom';

function Navbar() {
  // State for menu, search, and sticky navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('user') !== null;
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Add effect to listen for storage changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('user') !== null);
    };

    // Listen for storage changes (in case user logs in/out in another tab)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Navigation links
  const NavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
    { name: 'About-Author', path: '/about' }
  ];

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Toggle functions for menu and search
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Effect to handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20 py-4 ${isSticky ? 'sticky top-0 z-50 bg-slate-100' : 'bg-white'}`}>
      <div className="logo flex items-center cursor-pointer">
        <Link to='/'>
          <img src={logo} alt="Meta-Blog Logo" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="flex items-center lg:order-2">
        {/* Search bar */}
        <div className={`searchbar relative w-52 hidden lg:block ${isSearchOpen ? 'block' : ''}`}>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="search"
                placeholder='Search...'
                className={`p-2 pl-4 rounded-md bg-slate-100 outline-none w-full ${isSticky ? 'bg-white' : 'bg-slate-100'}`}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </form>
        </div>

        {/* Register Button / Logout Button */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors hidden lg:block"
          >
            Logout
          </button>
        ) : (
          <Link to="/register" className="ml-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors hidden lg:block">
            Register
          </Link>
        )}

        {/* Menu icon for mobile view */}
        <div className="menu-icon md:hidden ml-4 cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Desktop Navigation links */}
      <div className="hidden md:flex md:w-auto md:order-1">
        {NavLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `block lg:inline-block lg:mt-0 ${isActive ? 'text-slate-800' : 'text-gray-500'} hover:text-slate-800 mr-4`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Navigation links */}
      <div className={`navlinks w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {NavLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `block py-2 ${isActive ? 'text-slate-800' : 'text-gray-500'} hover:text-slate-800`}
          >
            {link.name}
          </NavLink>
        ))}
        {/* Mobile view Register/Logout button */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="w-full mt-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700"
          >
            Logout
          </button>
        ) : (
          <Link to="/register" className="block w-full mt-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 text-center">
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;