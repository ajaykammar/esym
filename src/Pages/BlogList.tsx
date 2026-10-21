import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BlogData } from "../Data/BlogData";
import { Calendar, User, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
}

const BlogList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogs = BlogData as Blog[];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Helmet>
        <title>Virtual Simulation & Science Education Blog | MantrixLab</title>
        <meta 
          name="description" 
          content="Learn about the impact of virtual simulations in science education. Explore how interactive 3D labs are transforming STEM learning for students everywhere." 
        />
        <meta property="og:title" content="Virtual Simulation & Science Education Blog | MantrixLab" />
        <meta property="og:description" content="Insights into the future of science education and interactive 3D learning through virtual simulations." />
      </Helmet>
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Our Insights & <span className="text-blue-400">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
            Explore the latest in 3D education, virtual labs, and scientific discoveries through our expert-curated blogs.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link to={`/blog/${blog.slug}`} className="block overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-blue-500" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-blue-500" />
                    {blog.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${blog.slug}`} 
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group/btn"
                >
                  Read More 
                  <ArrowRight size={18} className="transform transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
