import footerlogo from "../../assets/footer-logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const QuickLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About-Author", path: "/about" },
  ];
  const QucikCategories = [
    { name: "Technology", path: "/category/technology" },
    { name: "Sports", path: "/category/sports" },
    { name: "Health", path: "/category/health" },
    { name: "Finance", path: "/category/finance" },
  ];
  return (
    <>
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">About</h3>
              <p className="text-gray-600 mb-2">
                Your source for the latest tech news and insights.
              </p>
              <div className="text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  metablog10@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> 880-1234-5678
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-6 md:mb-0">
              <div className="flex flex-wrap justify-between">
                <div className="w-1/2 mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Quick Links
                  </h4>
                  {QuickLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block mt-4 flex flex-col gap-2 pt-2 lg:mt-0 ${
                          isActive ? "text-slate-800" : "text-gray-500"
                        } hover:text-slate-800 mr-4`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
                <div className="w-1/2 cursor-pointer">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Category
                  </h4>
                  {QucikCategories.map((category) => (
                    <NavLink
                      key={category.name}
                      to={`/category/${category.name.toLowerCase()}`}
                      className={({ isActive }) =>
                        `block mt-4 flex flex-col gap-2 pt-2 lg:mt-0 ${
                          isActive ? "text-slate-800" : "text-gray-500"
                        } hover:text-slate-800 mr-4`
                      }
                    >
                      {category.name}
                    </NavLink>
                  ))}
                  {/* <ul className="text-gray-500 flex flex-col gap-2 pt-2">
                    <li className="hover:text-slate-800">Technology</li>
                    <li className="hover:text-slate-800">Sports</li>
                    <li className="hover:text-slate-800">Travel</li>
                    <li className="hover:text-slate-800">Finance</li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                Weekly Newsletter
              </h2>
              <h5 className="text-gray-600 text-center mb-4">
                Get blog Articles and updates by email
              </h5>
              <form className="flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Your Email..."
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-gray-600 flex flex-col sm:flex-row justify-between items-center">
            <div className="meta-logo flex flex-row gap-2 mb-4 sm:mb-0">
              <img src={footerlogo} alt="footerlogo" className="w-10 h-10" />
              <div className="logo-content">
                <h3 className="font-bold text-gray-800">Meta Blog</h3>
                <p className="text-gray-600">
                  © JS Template 2023. All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="policies flex gap-4">
              <a href="#" className="hover:text-gray-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
