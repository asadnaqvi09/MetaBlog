import Home from './components/Home Coponents/Home'
import Blogs from './components/Blog Components/Blogs'
import { Routes, Route } from 'react-router-dom'
import SearchBlog from './components/constant/SearchBlog'
import Contact from './components/Contact-Us Components/Contact'
import About from './components/About Us Component/About'
import SingleBlogPage from './components/constant/SinglePage'
import Register from './components/constant/Register'
import Login from './components/constant/Login'
import Category from './components/constant/Category'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/search' element={<SearchBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/:title" element={<SingleBlogPage />} />
        <Route path="/blogs/:title" element={<SingleBlogPage />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App