import { useRef } from 'react';
import latestPosts from '../../json files/blogPosts.json';
import Cards from '../../components/constant/Cards';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Posts() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const FilterData = latestPosts.filter((item) => item.blogCategory === 'Latest Blog').slice(0, 6);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 mt-10'>
      <div className='relative'>
        <div className="heading text-xl font-bold text-slate-800 mb-2">Latest Post</div>
      </div>
      {/* Grid layout for medium and large screens */}
      <div className='hidden md:grid md:grid-cols-3 md:gap-2 md:auto-rows-fr'>
        {FilterData.map((blog) => (
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
      {/* Swiper carousel for small screens */}
      <div className='md:hidden relative'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='swiper-container'
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {FilterData.map((item) => (
            <SwiperSlide key={item.uniqueID}>
              <Link to={`/${item.title}`}>
                <Cards item={item} width='w-full' height='h-auto' />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="allposts py-6 flex justify-center">
        <button className='bg-transparent border-2 mt-4 border-gray-100 text-black px-4 py-2 rounded-md' onClick={() => {
          navigate('/blogs');
        }}>
          View All Blogs
        </button>
      </div>
    </div>
  );
}

export default Posts;