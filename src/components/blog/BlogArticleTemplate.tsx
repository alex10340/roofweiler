import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "numbered-list";
  content: string | string[];
  heading?: string;
  items?: Array<{ title?: string; content: string }>;
}

export interface BlogArticleData {
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  sections: Array<{
    heading: string;
    content: BlogSection[];
  }>;
  conclusion?: {
    paragraphs: string[];
  };
  relatedArticles: Array<{
    image: string;
    imageAlt: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug?: string;
  }>;
}

interface BlogArticleTemplateProps {
  data: BlogArticleData;
}

export default function BlogArticleTemplate({ data }: BlogArticleTemplateProps) {
  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case "paragraph":
        return (
          <p key={index} className="text-lg leading-relaxed text-[#a0a09f] mb-6">
            {section.content}
          </p>
        );

      case "heading":
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4 text-[#ffffff]">
            {section.content}
          </h3>
        );

      case "list":
        return (
          <div key={index} className="mb-6">
            {section.heading && (
              <h3 className="text-2xl font-semibold mb-4 text-[#ffffff]">
                {section.heading}
              </h3>
            )}
            <ul className="space-y-4">
              {section.items?.map((item, i) => (
                <li key={i} className="text-lg leading-relaxed text-[#a0a09f] flex items-start gap-3">
                  <span className="text-[#ffde11] mt-1">•</span>
                  <span>
                    {item.title && <strong className="text-[#ffffff]">{item.title}:</strong>}{" "}
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "numbered-list":
        return (
          <div key={index} className="space-y-6">
            {section.items?.map((item, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold mb-4 flex items-start gap-3 text-[#ffffff]">
                  <span className="text-[#ffde11]">{i + 1}.</span>
                  <span>{item.title}</span>
                </h3>
                <p className="text-lg leading-relaxed text-[#a0a09f] pl-8">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-[#a0a09f] mb-8">
          <span>{data.author}</span>
          <span>•</span>
          <span>{data.date}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{data.readTime}</span>
          </div>
        </div>

        {/* Title and Image */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 mb-12 md:items-center">
          {/* Title */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] leading-tight">
              {data.title}
            </h1>
          </div>

          {/* Image on Right */}
          <div className="flex-shrink-0 w-full sm:w-[280px] md:w-[240px] lg:w-[280px] h-[200px] sm:h-[180px] md:h-[160px] lg:h-[180px] relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-[#a0a09f]">
            {data.introduction}
          </p>
        </div>

        {/* Dynamic Sections */}
        {data.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#ffffff]">
              {section.heading}
            </h2>
            {section.content.map((contentItem, contentIndex) =>
              renderSection(contentItem, contentIndex)
            )}
          </section>
        ))}

        {/* Conclusion */}
        {data.conclusion && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#ffffff]">
              Conclusion
            </h2>
            {data.conclusion.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-[#a0a09f] mb-6">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {/* Related Articles */}
        <section className="border-t border-[#2a2a2a] pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#ffffff]">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.relatedArticles.map((article, index) => {
              const ArticleContent = (
                <article
                  key={index}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:bg-[#323232] transition-colors h-full"
                >
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#ffde11] mb-2">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-semibold text-[#ffffff] mb-2">
                      {article.title}
                    </h3>
                    <p className="text-[#a0a09f] text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="text-sm text-[#6e6e6e]">
                      {article.date} • {article.readTime}
                    </div>
                  </div>
                </article>
              );

              return article.slug ? (
                <Link key={index} href={`/blog/${article.slug}`} className="block">
                  {ArticleContent}
                </Link>
              ) : (
                ArticleContent
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
