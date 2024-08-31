import BlogCard from "@/components/BlogCard";
import BlogCategory from "@/components/BlogCategory";
import BlogClouds from "@/components/BlogClouds";
import BlogHero from "@/components/BlogHero";
import BlogIntaFeed from "@/components/BlogIntaFeed";
import BlogNewsLatter from "@/components/BlogNewsLatter";
import BlogRecents from "@/components/BlogRecents";
import BlogSearch from "@/components/BlogSearch";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogHero />
      <div className="w-full max-w-[1170px] mx-auto flex gap-[30px]">
        <div className="w-[64%] mb-[200px]">
          <BlogCard />
          <BlogCard />
        </div>
        <div className=" w-[36%]">
          <BlogSearch />
          <BlogCategory />
          <BlogRecents />
          <BlogClouds />
          <BlogIntaFeed />
          <BlogNewsLatter />
        </div>
      </div>
    </div>
  );
};

export default page;
