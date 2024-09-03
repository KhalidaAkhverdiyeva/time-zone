import { notFound } from "next/navigation";
import client from "../../../../sanity";
import { IoPersonSharp } from "react-icons/io5";
import { FaComments, FaFacebookF, FaGlobe, FaTwitter } from "react-icons/fa";
import BlogDetailsHero from "@/components/BlogDetailsHero";
import BlogSearch from "@/components/BlogSearch";
import BlogCategory from "@/components/BlogCategory";
import BlogRecents from "@/components/BlogRecents";
import BlogClouds from "@/components/BlogClouds";
import BlogIntaFeed from "@/components/BlogIntaFeed";
import BlogNewsLatter from "@/components/BlogNewsLatter";
import { IoMdHeart } from "react-icons/io";
import { LiaBehance } from "react-icons/lia";

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
  detailedDescription: string;
  highlighted: string;
  date: string;
}

const BlogDetail = async ({ params }: { params: { blog_details: string } }) => {
  try {
    const post = await client.fetch<Post>(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        tag,
        image{
          asset->{
            url
          }
        },
        description,
        detailedDescription,
        highlighted,
        date
      }`,
      { slug: params.blog_details }
    );

    if (!post) {
      notFound();
    }

    const sections: string[] = post.detailedDescription
      .split("|||")
      .map((section: string) => section.trim());

    return (
      <div>
        <BlogDetailsHero />
        <div className="w-full max-w-[1170px] mx-auto px-[15px] md:px-[0px] flex flex-col md:flex-row gap-[30px]">
          <div className="md:w-[64%] mb-[50px] cursor-pointer">
            <div className="relative">
              <img src={post.image.asset.url} alt={post.title} />
            </div>

            <div className="py-[20px] pr-[30px]">
              <h4 className="text-[#0b1c39] font-[600] text-[24px] mb-[5px]">
                {post.title}
              </h4>
              <div className="flex gap-[10px] items-center my-[10px] text-[#777] font-[300]">
                <div className="flex items-center gap-[7px]">
                  <IoPersonSharp /> {post.tag}
                </div>
                <div className="w-[1px] h-[10px] bg-black"></div>
                <div className="flex items-center gap-[7px]">
                  <FaComments />
                  03 Comments
                </div>
              </div>
              {sections.map((section: string, index: number) => (
                <div key={index} className="mb-[20px]">
                  <p className="text-[#777] leading-[30px] font-[300] mb-[20px]">
                    {section}
                  </p>

                  {index === sections.length - 2 && (
                    <div className="bg-[#F2F3F7] p-[30px] mb-[20px]">
                      <p className="text-[#888] font-[400] bg-white p-[30px] border-l-solid border-l-[2px] border-l-[#888]">
                        {post.highlighted}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t-[1px] border-t-solid border-t-gray-300 flex items-center justify-between">
              <div className="flex items-center gap-[10px] text-[#777777] py-[20px]">
                <IoMdHeart className="text-[#777777]" /> Lily and 4 people like
                this
              </div>
              <div className="flex gap-[10px] text-[#777777]">
                <FaTwitter className="w-[14px] h-[14px]" />
                <FaFacebookF className="w-[14px] h-[14px]" />
                <LiaBehance className="w-[14px] h-[14px] text-[20px]" />
                <FaGlobe className="w-[14px] h-[14px]" />
              </div>
              <div></div>
            </div>
            <div className="nextprev"></div>
            <h4 className="text-[18px] my-[20px] font-[600] text-[#0b1c39]">
              Leave a reply
            </h4>
            <div className="flex flex-col gap-[20px]">
              <textarea
                placeholder="Write Comment"
                className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] h-[100px] leading-[1.5] resize-none"
              ></textarea>
              <div className="flex gap-[20px]">
                <textarea
                  placeholder="Name"
                  className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] leading-[1.5] resize-none"
                ></textarea>
                <textarea
                  placeholder="Email "
                  className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] leading-[1.5] resize-none"
                ></textarea>
              </div>
              <textarea
                placeholder="Website"
                className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300]  leading-[1.5] resize-none"
              ></textarea>
            </div>
            <button className="text-white  md:w-[15%] uppercase bg-[#FF2020] my-[20px] py-[12px] px-[25px] rounded-[5px]">
              send
            </button>
          </div>
          <div className="md:w-[36%]">
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
  } catch (error) {
    notFound();
  }
};

export default BlogDetail;
