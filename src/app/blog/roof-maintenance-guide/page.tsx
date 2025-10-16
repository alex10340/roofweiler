import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogArticles["roof-maintenance-guide"].metaTitle,
  description: blogArticles["roof-maintenance-guide"].metaDescription,
};

export default function BlogPost() {
  return <BlogArticleTemplate data={blogArticles["roof-maintenance-guide"]} />;
}
