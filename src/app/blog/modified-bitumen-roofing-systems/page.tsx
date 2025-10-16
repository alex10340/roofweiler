import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogArticles["modified-bitumen-roofing-systems"].metaTitle,
  description: blogArticles["modified-bitumen-roofing-systems"].metaDescription,
};

export default function BlogPost() {
  return <BlogArticleTemplate data={blogArticles["modified-bitumen-roofing-systems"]} />;
}
