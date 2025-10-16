import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogArticles["clean-roof-lasts-longer"].metaTitle,
  description: blogArticles["clean-roof-lasts-longer"].metaDescription,
};

export default function BlogPost() {
  return <BlogArticleTemplate data={blogArticles["clean-roof-lasts-longer"]} />;
}
