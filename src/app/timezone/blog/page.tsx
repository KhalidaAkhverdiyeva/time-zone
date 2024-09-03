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
      <div className="w-full max-w-[1170px] mx-auto flex flex-col md:flex-row  px-[15px] md:px-[0px] gap-[30px]">
        <div className=" md:w-[64%] mb-[30px] md:mb-[200px]">
          <BlogCard />
        </div>
        <div className=" md:w-[36%]">
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
