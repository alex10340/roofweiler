import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export default function BlogPost() {
  return <BlogArticleTemplate data={blogArticles["hurricane-preparation"]} />;
}
