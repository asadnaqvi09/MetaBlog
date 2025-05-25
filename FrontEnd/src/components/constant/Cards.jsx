import React from "react";

function Cards({ item, width = 'w-80', height = 'h-auto' }) {
  return (
    <div className={`mt-4 ${width} ${height} cursor-pointer `}>
      <div className="card shadow-xl hover:scale-105 duration-200 dark:text-white dark:border rounded-lg overflow-hidden h-full flex flex-col">
        <figure className="w-full h-48 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4 flex flex-col flex-grow">
          <div className="category text-blue-600 mb-2">{item.category}</div>
          <div className="title text-lg font-bold text-black mb-2">{item.title}</div>
          <div className="description text-sm text-slate-800 flex-grow overflow-hidden">{item.description}</div>
          <div className="info flex justify-between items-start mt-2">
            <div className="flex items-center">
              <img
                src={item.authorImage}
                alt={item.authorName}
                className="author-image w-6 h-6 rounded-full mr-2"
              />
              <div className="author-name text-sm text-slate-800">{item.authorName}</div>
            </div>
            <div className="date text-sm text-slate-800">{item.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;