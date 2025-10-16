import Image from "next/image";
import Link from "next/link";

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
}

export default function BlogSection({
  title = "BLOG",
  subtitle,
}: BlogSectionProps = {}) {
  const blogPosts = [
    {
      image: "/assets/blog1.webp",
      title: "Clean Roof Lasts Longer",
      description:
        "Maintaining a clean roof is crucial for homeowners in Miami-Dade, Broward, and Palm Beach...",
      url: "/blog/clean-roof-lasts-longer",
    },
    {
      image: "/assets/blog2.webp",
      title: "Enhance Your Home's Safety with Impact Windows in Florida",
      description:
        "Impact windows provide a robust solution for homeowners looking to fortify their properties against...",
      url: "/blog/impact-windows-in-florida",
    },
    {
      image: "/assets/blog3.webp",
      title: "Your Ultimate Guide to Modified Bitumen Roofing Systems",
      description:
        "Learn about modified bitumen roofing systems, their benefits, installation, and maintenance to...",
      url: "/blog/modified-bitumen-roofing-systems",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Blog Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ffde11] mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white text-xl md:text-2xl font-semibold">
              {subtitle}
            </p>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section with Gray Overlay */}
              <div className="bg-[#6e6e6e] p-6 min-h-[280px] flex flex-col">
                <h2 className="text-[#ffffff] text-xl font-semibold mb-4 leading-tight group-hover:text-[#ffde11] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#ffffff] text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
