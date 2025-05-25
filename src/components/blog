import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ChevronRight, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Agentic AI: Autonomous Business Operations in 2025",
    excerpt: "Explore how agentic AI systems are revolutionizing business operations by autonomously managing complex workflows, making intelligent decisions, and reducing operational overhead by up to 80%.",
    author: "Alex Morgan",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "AI Innovation",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Agentic AI", "Automation", "Enterprise AI"],
    featured: true
  },
  {
    id: 2,
    title: "Building Multi-Agent Systems: A Technical Deep Dive",
    excerpt: "Learn the architectural patterns and best practices for developing multi-agent AI systems that collaborate seamlessly to solve complex business challenges.",
    author: "Jamie Chen",
    date: "March 12, 2025",
    readTime: "12 min read",
    category: "Technical",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Multi-Agent", "Architecture", "Development"]
  },
  {
    id: 3,
    title: "Transforming Customer Experience with Conversational AI",
    excerpt: "Discover how conversational AI is reshaping customer interactions, reducing response times by 75%, and creating more meaningful customer relationships.",
    author: "Taylor Reynolds",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Customer Experience",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Conversational AI", "CX", "Contact Centers"]
  },
  {
    id: 4,
    title: "ROI of AI Implementation: Real-World Case Studies",
    excerpt: "Analyzing the measurable business impact of AI implementations across industries, with case studies showing 3-6x ROI within the first year.",
    author: "Jordan Smith",
    date: "March 8, 2025",
    readTime: "10 min read",
    category: "Business Strategy",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["ROI", "Case Studies", "Business Impact"]
  },
  {
    id: 5,
    title: "Securing AI Systems: Enterprise Best Practices",
    excerpt: "Essential security considerations and best practices for deploying AI systems in enterprise environments while maintaining compliance and data protection.",
    author: "Alex Morgan",
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Security",
    image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Security", "Compliance", "Enterprise AI"]
  },
  {
    id: 6,
    title: "Product Development Acceleration with AI: A Strategic Guide",
    excerpt: "How AI-powered tools and methodologies are accelerating product development cycles from months to weeks while improving quality and market fit.",
    author: "Jamie Chen",
    date: "March 3, 2025",
    readTime: "9 min read",
    category: "Product Development",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Product Strategy", "Development", "Innovation"]
  }
];

const categories = [
  { name: "All Posts", count: 15, icon: <BookOpen className="h-4 w-4" /> },
  { name: "AI Innovation", count: 5, icon: <Lightbulb className="h-4 w-4" /> },
  { name: "Technical", count: 4, icon: <TrendingUp className="h-4 w-4" /> },
  { name: "Customer Experience", count: 3, icon: <User className="h-4 w-4" /> },
  { name: "Business Strategy", count: 2, icon: <Tag className="h-4 w-4" /> },
  { name: "Security", count: 1, icon: <Clock className="h-4 w-4" /> }
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="inline-block bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              CloudWest Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Transformation Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, strategies, and technical deep dives on AI transformation, 
              product innovation, and customer experience revolution
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      </div>
                      <button className="text-blue-700 hover:text-blue-800 font-medium flex items-center">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center">
                        Read More <ChevronRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 rounded-md bg-blue-700 text-white">1</button>
              <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get the latest insights on AI transformation delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;