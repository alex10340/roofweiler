import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["hurricane-preparation"].metaTitle,
	description: blogArticles["hurricane-preparation"].metaDescription,
};

export default function BlogPost() {
	return <BlogArticleTemplate data={blogArticles["hurricane-preparation"]} />;
}
