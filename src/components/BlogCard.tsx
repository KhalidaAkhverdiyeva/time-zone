// components/BlogCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";
import client from "../../sanity";
import Skeleton from "./Skeleton";

interface Post {
  _id: string;
  title: string;
  tag: string;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
  date: string;
}

const BlogCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          _id,
          title,
          tag,
          image{
            asset->{
              url
            }
          },
          description,
          date
        }`
      )
      .then((data: Post[]) => setPosts(data))
      .catch(console.error);
  }, []);

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  if (!posts.length) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <Link key={post._id} href={`/timezone/${slugify(post.title)}`}>
          <div className="shadow-blogShadow mb-[50px] cursor-pointer">
            <div className="relative">
              <img src={post.image.asset.url} alt={post.title} />
              <div className="absolute flex flex-col rounded-[5px] bottom-[-20px] left-[40px] bg-[#ff2020] text-white py-[13px] px-[30px]">
                <span className="text-[30px]">
                  {new Date(post.date).getDate()}
                </span>
                <span>
                  {new Date(post.date)
                    .toLocaleString("default", { month: "short" })
                    .toUpperCase()}
                </span>
              </div>
            </div>
            <div className="pt-[60px] pl-[35px] pr-[30px] pb-[35px]">
              <h4 className="text-[#0b1c39] font-[600] text-[24px] mb-[15px]">
                {post.title}
              </h4>
              <p className="text-[#777] leading-[30px] font-[300]">
                {post.description}
              </p>
              <div className="flex gap-[10px] items-center mt-[20px] text-[#777] font-[300]">
                <div className="flex items-center gap-[7px]">
                  <IoPersonSharp /> {post.tag}
                </div>
                <div className="w-[1px] h-[10px] bg-black"></div>
                <div className="flex items-center gap-[7px]">
                  <FaComments />
                  03 Comments
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
