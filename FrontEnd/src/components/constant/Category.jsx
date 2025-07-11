import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useParams } from "react-router-dom";
import blogs from "../../json files/blogPosts.json";
import { Link } from "react-router-dom";

function Category() {
  const { category } = useParams();
  const formatCategory = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const filteredBlogs = category ? blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase()) : blogs;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-uppercase">
          {category ? `${formatCategory(category)} Category` : "All Categories"}
        </h1>
        <p className="text-gray-600">
          {category 
            ? `Displaying blogs for the category ${formatCategory(category)}`
            : "Displaying blogs from all categories"}
        </p>
        <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">{formatCategory(category)} Blogs</h2>
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
      <Footer />
    </>
  );
}

export default Category;