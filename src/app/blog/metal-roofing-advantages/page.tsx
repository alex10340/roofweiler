import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["metal-roofing-advantages"].metaTitle,
	description: blogArticles["metal-roofing-advantages"].metaDescription,
};

export default function BlogPost() {
	return (
		<BlogArticleTemplate data={blogArticles["metal-roofing-advantages"]} />
	);
}
