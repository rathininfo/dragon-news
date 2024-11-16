import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa"; // Import bookmark icon

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-sm font-bold">{news.author.name}</h4>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-gray-500 text-xl">
            <FaRegBookmark />
          </button>
          <button className="text-gray-500 text-xl">
            <BsShare />
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src={news.image_url}
        alt="News Thumbnail"
        className="w-full object-cover"
      />

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-base font-bold">{news.title}</h2>
        <p className="text-sm text-gray-600">{news.details}</p>
        <a href="#" className="text-yellow-400 text-sm hover:underline">
          Read More
        </a>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-2 border-t">
        <div className="flex items-center gap-2 text-yellow-500 ">
          <div className="flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-sm">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <AiOutlineEye />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
