import type { Metadata } from "next";
import BlogArticleTemplate from "@/components/blog/BlogArticleTemplate";
import { blogArticles } from "@/data/blogArticles";

export const metadata: Metadata = {
	title: blogArticles["roofing-replacement-cost"].metaTitle,
	description: blogArticles["roofing-replacement-cost"].metaDescription,
};

export default function BlogPost() {
	return (
		<BlogArticleTemplate data={blogArticles["roofing-replacement-cost"]} />
	);
}
