import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["impact-windows-replacement"].metaTitle,
	description: blogArticles["impact-windows-replacement"].metaDescription,
};

export default function BlogPost() {
	return (
		<BlogArticleTemplate data={blogArticles["impact-windows-replacement"]} />
	);
}
