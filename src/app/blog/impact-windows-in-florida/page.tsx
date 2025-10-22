import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["blog-impact-windows-in-florida"].metaTitle,
	description: blogArticles["blog-impact-windows-in-florida"].metaDescription,
};

export default function BlogPost() {
	return (
		<BlogArticleTemplate
			data={blogArticles["blog-impact-windows-in-florida"]}
		/>
	);
}
