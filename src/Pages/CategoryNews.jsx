import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div className="">
      <h1 className="font-semibold text-xl">Dragon News Home</h1>
      <div className="flex flex-col gap-4 mt-6">
        {news.map((singleNews) => (
          <NewsCard key={news._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
