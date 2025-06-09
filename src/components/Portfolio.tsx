import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding'];
  
  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Web Design',
      description: 'A comprehensive financial analytics platform with real-time data visualization and intuitive user experience.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Figma'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Meditation App',
      category: 'Mobile Apps',
      description: 'Peaceful mobile app design focused on mindfulness and mental wellness with soothing interactions.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'UI/UX', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'EcoFlow Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for sustainable energy company including logo, colors, and guidelines.',
      image: 'https://images.pexels.com/photos/2833373/pexels-photo-2833373.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Illustrator', 'Brand Strategy', 'Style Guide'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Modern e-commerce design with focus on conversion optimization and seamless shopping experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Shopify', 'Conversion', 'A/B Testing'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Travel Booking App',
      category: 'Mobile Apps',
      description: 'Intuitive travel booking interface with smart recommendations and seamless booking flow.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Maps API', 'Animations'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'Web Design',
      description: 'Clean and efficient dashboard design for project management SaaS with advanced analytics.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Charts', 'Dark Mode'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my design approach and problem-solving skills
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-indigo-600 font-medium px-3 py-1 bg-indigo-50 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;