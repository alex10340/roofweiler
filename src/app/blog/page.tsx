"use client";

import { MoreVertical, Eye, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

      {/* Blog Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden flex gap-6 p-6 hover:bg-[#323232] transition-colors"
            >
              {/* Post Image */}
              <div className="flex-shrink-0 w-[186px] h-[140px] relative overflow-hidden rounded">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="flex-1 min-w-0">
                {/* Meta Information */}
                <div className="flex items-center gap-2 text-sm text-[#a0a09f] mb-2">
                  <span className="text-[#ffde11]">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-[#ffffff] text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#a0a09f] text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 text-sm text-[#6e6e6e]">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* More Options Button */}
              <div className="flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#6e6e6e] hover:text-[#ffffff] hover:bg-[#3a3a3a]"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
