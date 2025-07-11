import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import blogData from '../../json files/blogPosts.json';

const SingleBlogPage = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const userString = localStorage.getItem('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }

    // Load comments from localStorage for this specific blog
    const savedComments = localStorage.getItem(`comments-${title}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }

    const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
    const foundBlog = blogData.find(post => post.title.toLowerCase() === formattedTitle);
    setBlog(foundBlog);
  }, [title]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment && user) {
      const newCommentObj = {
        id: Date.now(), // Using timestamp as unique ID
        content: newComment,
        userEmail: user.email,
        userName: user.name, // Assuming user object has name
        timestamp: new Date().toLocaleString(),
      };

      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);

      // Save to localStorage
      localStorage.setItem(`comments-${title}`, JSON.stringify(updatedComments));

      setNewComment('');
    } else if (!user) {
      alert('Please login to comment');
    }
  };

  if (!blog) return <div>Blog post not found</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-32 py-8">
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{blog.category}</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center mb-4">
          <img src={blog.authorImage} alt={blog.authorName} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{blog.authorName}</p>
            <p className="text-sm text-gray-500">Published On {blog.date}</p>
          </div>
        </div>

        <div className="mb-4">
          <img src={blog.image} alt={blog.title} className="w-full object-fit h-[14rem] md:h-[26rem] rounded-lg" />
        </div>

        <p className="text-lg font-semibold mb-4">{blog.description}</p>

        {/* Blog Sections */}
        {blog.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            {section.points ? (
              section.points.map((point, idx) => (
                <div key={idx} className="mb-2">
                  <h3 className="font-bold">{point.title}</h3>
                  <p>{point.content}</p>
                </div>
              ))) : (
              section.content && Array.isArray(section.content) ? (
                <ul className="list-disc list-inside">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )
            )}
            {section.tips && (
              <ul className="list-disc list-inside">
                {section.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2 className="text-xl font-semibold mt-8">Conclusion</h2>
        <p>{blog.conclusion}</p>

        {/* Comments Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Comments</h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={user ? "Add a comment..." : "Please login to comment"}
              className="w-full border p-4 rounded-lg mb-4 min-h-[100px]"
              required
              disabled={!user}
            />
            <button
              type="submit"
              className={`px-6 py-2 rounded-lg text-white ${user ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!user}
            >
              {user ? 'Submit Comment' : 'Login to Comment'}
            </button>
          </form>

          {/* Comments Display */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="mb-3">{comment.content}</p>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{comment.userName}</p>
                    <p className="text-gray-400">{comment.userEmail}</p>
                    <p className="text-gray-400">{comment.timestamp}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogPage;