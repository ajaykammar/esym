import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BlogData } from "../Data/BlogData";
import { Calendar, User, ChevronRight, ChevronDown, ChevronUp, Share2, Facebook, Twitter, Linkedin, List, CornerDownRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TOCItem {
  id: string;
  title: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  tableOfContents: TOCItem[];
  faqs: FAQItem[];
}

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = (BlogData as Blog[]).find((b) => b.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <Link to="/blog" className="text-blue-500 hover:text-blue-700 font-semibold underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqSchema = blog.faqs && blog.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((faq: FAQItem) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{`${blog.title} | MantrixLab Blog`}</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-6 flex items-center gap-3 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 line-clamp-1">{blog.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Blog Header */}
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" data-aos="fade-up">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500 font-semibold mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  <span>By {blog.author}</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-gray-100 pl-6 hidden sm:flex">
                  <Calendar size={18} className="text-blue-600" />
                  <span>{blog.date}</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl mb-12" data-aos="zoom-in" data-aos-delay="200">
                <img src={blog.image} alt={blog.title} className="w-full h-auto max-h-[600px] object-cover" />
              </div>
            </div>

            {/* Content Table for Mobile */}
            <div className="lg:hidden mb-12 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-4 font-bold text-gray-900 text-lg uppercase tracking-wider border-b-2 border-blue-200 pb-2">
                <List size={20} className="text-blue-600" />
                Table of Contents
              </div>
              <ul className="space-y-3">
                {blog.tableOfContents.map((item: TOCItem) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 group decoration-2 underline-offset-4 hover:underline">
                      <CornerDownRight size={14} className="text-blue-300" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed mb-16 blog-content-wrapper" 
              data-aos="fade-up" 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />

            {/* FAQs Section */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 border border-gray-100" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {blog.faqs.map((faq: FAQItem, index: number) => (
                    <div 
                      key={index} 
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === index ? "border-blue-400 shadow-lg" : "border-gray-200"}`}
                    >
                      <button 
                        className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-800 text-lg transition-colors hover:text-blue-600"
                        onClick={() => toggleFaq(index)}
                      >
                        {faq.question}
                        {openFaq === index ? <ChevronUp size={22} className="text-blue-600" /> : <ChevronDown size={22} className="text-gray-400" />}
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share Post */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-y border-gray-100 mb-12" data-aos="fade-up">
              <span className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Share2 size={22} className="text-blue-600" />
                Share this post:
              </span>
              <div className="flex gap-4">
                <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:translate-y-[-2px] duration-200">
                  <Facebook size={24} />
                </button>
                <a 
                  href="https://www.linkedin.com/company/mantrixlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition shadow-lg hover:translate-y-[-2px] duration-200 inline-block"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 space-y-10">
              
              {/* Desktop Table of Contents */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-xl font-extrabold mb-6 text-gray-900 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <List size={22} className="text-blue-600" />
                  Table of Contents
                </h3>
                <ul className="space-y-4">
                  {blog.tableOfContents.map((item: TOCItem) => (
                    <li key={item.id} className="group">
                      <a 
                        href={`#${item.id}`} 
                        className="text-gray-600 hover:text-blue-600 transition-all font-semibold flex items-center gap-2 text-lg transform group-hover:translate-x-1"
                      >
                        <CornerDownRight size={16} className="text-gray-300 group-hover:text-blue-400" />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts Dummy */}
              <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4 leading-tight">Want to experience these labs?</h3>
                <p className="mb-8 text-blue-100 leading-relaxed font-medium">Join thousands of students interactive learning today.</p>
                <Link to="/virtuallabs" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-md w-full text-center tracking-wide">
                  Explore Labs
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Styles for content HTML */}
      <style>{`
        .blog-content-wrapper h2 {
          font-weight: 800;
          color: #111827;
          font-size: 2.25rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          scroll-margin-top: 100px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .blog-content-wrapper h2::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 1.5em;
          background: #2563eb;
          border-radius: 4px;
        }
        .blog-content-wrapper p {
          color: #374151;
          margin-bottom: 2rem;
          font-size: 1.25rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;
