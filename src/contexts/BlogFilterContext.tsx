"use client";

import { createContext, useContext } from "react";

const BlogFilterContext = createContext<{
	activeFilter: string;
	setActiveFilter: (filter: string) => void;
}>({
	activeFilter: "All Posts",
	setActiveFilter: () => {},
});

export const useBlogFilter = () => useContext(BlogFilterContext);

export default BlogFilterContext;
