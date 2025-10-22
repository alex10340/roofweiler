import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["ultimate-guide-impact-windows"].metaTitle,
	description: blogArticles["ultimate-guide-impact-windows"].metaDescription,
};

export default function BlogPost() {
	return (
		<BlogArticleTemplate data={blogArticles["ultimate-guide-impact-windows"]} />
	);
}
