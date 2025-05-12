
import Layout from '@/components/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '2025 Medical Billing Updates: What Practices Need to Know',
      excerpt: 'Stay current with the latest changes in medical billing regulations, coding updates, and reimbursement policies for 2025.',
      date: 'May 2, 2025',
      author: 'Jennifer Reynolds',
      category: 'Industry Updates',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 2,
      title: 'How AI is Transforming Medical Billing and Revenue Cycle Management',
      excerpt: 'Explore how artificial intelligence is revolutionizing medical billing processes, improving accuracy, and reducing administrative burden.',
      date: 'April 28, 2025',
      author: 'Michael Chen',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 3,
      title: '5 Strategies to Reduce Claim Denials in Your Medical Practice',
      excerpt: 'Implement these proven strategies to minimize claim denials and maximize reimbursement for your healthcare services.',
      date: 'April 15, 2025',
      author: 'Sarah Johnson',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 4,
      title: 'Telehealth Billing Guide: Maximizing Reimbursement for Virtual Services',
      excerpt: 'Navigate the complexities of telehealth billing with this comprehensive guide for healthcare providers.',
      date: 'April 10, 2025',
      author: 'David Wilson',
      category: 'Telehealth',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 5,
      title: 'Navigating the No Surprises Act: Compliance Guide for Medical Practices',
      excerpt: 'Understanding your obligations under the No Surprises Act and how to implement compliant billing practices.',
      date: 'March 25, 2025',
      author: 'Amanda Rodriguez',
      category: 'Compliance',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 6,
      title: 'Optimizing Patient Collections: Strategies for the Modern Practice',
      excerpt: 'Improve your patient collection rate with these effective strategies that enhance the patient financial experience.',
      date: 'March 18, 2025',
      author: 'Robert Thompson',
      category: 'Financial Management',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  const categories = [
    'All Categories',
    'Industry Updates',
    'Technology',
    'Best Practices',
    'Compliance',
    'Telehealth',
    'Financial Management',
    'Coding Tips'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ClaimsMD Blog</h1>
            <p className="text-lg text-white/90">
              Insights, tips, and industry updates to help you optimize your medical billing
              and revenue cycle management. Stay informed with the latest healthcare billing trends.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Blog Content Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 mb-10 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"} 
                className={index === 0 ? "bg-claimsBlue hover:bg-blue-900" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-3 left-4 bg-claimsBlue text-white text-xs px-3 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-800 hover:text-claimsBlue transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-claimsBlue hover:bg-claimsBlue/10 p-1"
                    asChild
                  >
                    <Link to={`/blog/${post.id}`}>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" className="bg-white">
                1
              </Button>
              <Button variant="outline" size="icon" className="bg-white">
                2
              </Button>
              <Button variant="outline" size="icon" className="bg-white">
                3
              </Button>
              <Button variant="outline" size="icon" className="bg-white">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/90 mb-8">
              Get the latest medical billing insights, industry updates, and expert tips delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded text-gray-800 w-full sm:w-auto sm:min-w-[300px]" 
              />
              <Button className="bg-white text-claimsBlue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
