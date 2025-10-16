"use client";

import { MoreVertical, Eye, MessageSquare, Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "Roofing",
    date: "Aug 1, 2024",
    readTime: "4 min read",
    title: "Clean Roof Lasts Longer",
    excerpt:
      "Maintaining a clean roof is crucial for homeowners in Miami-Dade, Broward, and Palm Beach Counties.",
    image: "/assets/blog1.webp",
    views: "12 views",
    comments: "0 comments",
  },
  {
    id: 2,
    category: "Windows & Doors",
    date: "Jul 8, 2024",
    readTime: "4 min read",
    title: "Enhance Your Home's Safety with Impact Windows in Florida",
    excerpt:
      "Impact Windows: Providing a robust solution for homeowners looking to protect their homes against severe weather conditions.",
    image: "/assets/blog2.webp",
    views: "18 views",
    comments: "0 comments",
  },
  {
    id: 3,
    category: "Roofing",
    date: "May 30, 2024",
    readTime: "4 min read",
    title: "Your Ultimate Guide to Modified Bitumen Roofing Systems",
    excerpt:
      "Learn about Modified Bitumen Roofing Systems, their benefits, installation, and maintenance, and see if it's the right choice for your property.",
    image: "/assets/blog3.webp",
    views: "16 views",
    comments: "0 comments",
  },
  {
    id: 4,
    category: "Roofing",
    date: "May 16, 2024",
    readTime: "4 min read",
    title:
      "How to Prepare Your Home for Hurricane Season: Tips for Protecting Your Property",
    excerpt:
      "Prepare your home for hurricane season with these essential tips to protect your property. Learn how to stay safe and secure.",
    image: "/assets/blog4.webp",
    views: "8 views",
    comments: "0 comments",
  },
  {
    id: 5,
    category: "Windows & Doors",
    date: "May 15, 2024",
    readTime: "5 min read",
    title:
      "The Ultimate Guide to Impact Windows: Why They're Superior to Regular Windows and",
    excerpt:
      "South Florida is a paradise known for its beautiful weather, but it's also a vulnerable to hurricanes. Discover what makes impact windows superior.",
    image: "/assets/blog5.webp",
    views: "7 views",
    comments: "0 comments",
  },
  {
    id: 6,
    category: "Windows & Doors",
    date: "May 12, 2024",
    readTime: "5 min read",
    title:
      "Transform Your Home and Protect Your Investment with Impact Windows Replacement",
    excerpt:
      "Discover the benefits of Impact Windows Replacement. No more worries when hurricanes are approaching.",
    image: "/assets/blog6.webp",
    views: "8 views",
    comments: "0 comments",
  },
  {
    id: 7,
    category: "Roofing",
    date: "May 10, 2024",
    readTime: "6 min read",
    title: "Breaking Down Roofing Replacement Cost: What You Need to Know",
    excerpt:
      "Breaking Down Roofing Replacement Cost: What You Need to Know Are you considering replacing your roof but unsure about the costs involved?",
    image: "/assets/blog7.webp",
    views: "7 views",
    comments: "0 comments",
  },
  {
    id: 8,
    category: "Roofing",
    date: "May 10, 2024",
    readTime: "4 min read",
    title:
      "The Advantages of Metal Roofing: How Metal Roofs Can Transform Your Home",
    excerpt:
      "Are you considering a roof replacement for your home? If so, you're probably come across various roofing options, but have you considered metal roofing?",
    image: "/assets/blog8.webp",
    views: "2 views",
    comments: "0 comments",
  },
  {
    id: 9,
    category: "Roofing",
    date: "Apr 30, 2024",
    readTime: "6 min read",
    title: "The Ultimate Guide to Roof Maintenance",
    excerpt:
      "This Ultimate Guide to Roof Maintenance: Image Description: A close-up photo of a well-maintained roof with shingles in various shades of...",
    image: "/assets/blog9.webp",
    views: "2 views",
    comments: "0 comments",
  },
  {
    id: 10,
    category: "Windows & Doors",
    date: "Apr 29, 2024",
    readTime: "4 min read",
    title: "10 Tips for Choosing the Perfect Windows for Your Home",
    excerpt:
      "Are you in the process of choosing windows for your home? If so, this article will provide you with 10 essential tips to help you make the best...",
    image: "/assets/blog10.webp",
    views: "1 view",
    comments: "0 comments",
  },
];

export default function BlogListingPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Posts");

  const filteredPosts = blogPosts.filter((post) => {
    if (activeFilter === "All Posts") return true;
    return post.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Navigation Tabs */}
      <nav className="border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveFilter("All Posts")}
              className={`py-4 transition-colors ${
                activeFilter === "All Posts"
                  ? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
                  : "text-[#a0a09f] hover:text-[#ffffff]"
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveFilter("Roofing")}
              className={`py-4 transition-colors ${
                activeFilter === "Roofing"
                  ? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
                  : "text-[#a0a09f] hover:text-[#ffffff]"
              }`}
            >
              Roofing
            </button>
            <button
              onClick={() => setActiveFilter("Windows & Doors")}
              className={`py-4 transition-colors ${
                activeFilter === "Windows & Doors"
                  ? "text-[#ffde11] border-b-2 border-[#ffde11] font-medium"
                  : "text-[#a0a09f] hover:text-[#ffffff]"
              }`}
            >
              Windows & Doors
            </button>
          </div>
        </div>
      </nav>

      {/* Blog Posts List */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#6e6e6e] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group flex flex-col sm:flex-row h-auto sm:h-[340px]"
            >
              {/* Post Image */}
              <div className="relative w-full sm:w-[454px] h-[280px] sm:h-[340px] flex-shrink-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="flex-1 p-6 flex flex-col justify-between relative">
                {/* More Options Button */}
                <button className="absolute top-4 right-4 p-2">
                  <MoreVertical className="w-5 h-5 text-white" />
                </button>

                <div>
                  {/* Meta Information */}
                  <div className="flex items-center gap-2 text-sm text-white mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-white font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-2xl font-bold mb-4 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white text-base mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 pt-4">
                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-white">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
