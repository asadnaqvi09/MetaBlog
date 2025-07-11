import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("Login successful:", formData);
      setSuccess(true);
      setFormData({ email: "", password: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="go-back bg-transparent fixed top-0 left-0 w-full h-16 flex items-center justify-center z-50">
        <Link to="/" className="text-indigo-600 hover:text-indigo-500 font-semibold mt-2">
          &larr; Go back to Home
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-md">
          <div>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to your Meta-Blog account
            </p>
          </div>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-md text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-600 text-sm p-3 rounded-md text-center">
                Login successful!
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-indigo-600 font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-center text-sm">
              Did not have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
