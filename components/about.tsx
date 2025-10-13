import UserIcon from "../src/assets/about/user-icon.svg";
import TagIcon from "../src/assets/about/tag-icon.svg";
import CalenderIcon from "../src/assets/about/calender-icon.svg";
import { Link } from "react-router-dom";
import arrow from "../src/assets/shop-page/right-arrow.svg";
import logo from "../src/assets/logo.svg";
import FeaturesSection from "./FeaturesSection";

interface BlogPost {
  id: number;
  image: string;
  author: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

const BlogPage: React.FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image:
        "https://amwoodstore.com/wp-content/uploads/2023/06/Untitled-design-2023-06-20T001528.863-1300x731.jpg", // Add your image src here
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 2,
      image:
        "https://www.weknowboise.com/uploads/shared/images/blog/best-boise-furniture-home-decor-stores.jpg", // Add your image src here
      author: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      title: "Exploring new ways of decorating",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      id: 3,
      image:
        "https://birchwoodfurniture.ca/wp-content/uploads/2023/07/Modern-Living-Room-Furniture-Ideas-Hero-scaled.jpg", // Add your image src here
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Handmade pieces that took time to make",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
  ];

  return (
    <div className="w-full">
      <div
        id="banner"
        className="flex flex-col  items-center justify-center bg-[url('../src/assets/shop-page/shop-banner.png')] bg-cover bg-center bg-no-repeat w-full min-h-[30vh] sm:min-h-[40vh] relative before:absolute before:inset-0 before:bg-black/10"
      >
        <div id="logo" className="w-10">
          <img src={logo} className="w-full" alt="" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            About
          </h1>
          <div className="flex flex-row gap-2 items-center justify-center text-gray-700 text-sm sm:text-base">
            <Link to={"/"}>Home</Link>
            <img className="w-2 opacity-60" src={arrow} alt="arrow" />
            <Link to={""} className="font-medium text-[#B88E2F]">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Blog Posts */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white">
                {/* Blog Image */}
                <div className="w-full aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image || "/api/placeholder/800/600"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Meta Info */}
                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={UserIcon} alt="" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={CalenderIcon} alt="" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src={TagIcon} alt="" />
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 hover:text-yellow-600 cursor-pointer transition-colors">
                  {post.title}
                </h2>

                {/* Blog Excerpt */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default BlogPage;
