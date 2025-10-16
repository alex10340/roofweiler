import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogArticles["choosing-perfect-windows"].metaTitle,
  description: blogArticles["choosing-perfect-windows"].metaDescription,
};

export default function BlogPost() {
  return <BlogArticleTemplate data={blogArticles["choosing-perfect-windows"]} />;
}
