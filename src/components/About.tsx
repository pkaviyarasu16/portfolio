import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: '50+', label: 'Projects Completed' },
    { icon: <Users className="h-8 w-8" />, number: '25+', label: 'Happy Clients' },
    { icon: <Coffee className="h-8 w-8" />, number: '1000+', label: 'Cups of Coffee' },
    { icon: <Heart className="h-8 w-8" />, number: '5', label: 'Years Experience' }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Started as Graphic Designer',
      description: 'Began my design journey focusing on print and brand identity work.'
    },
    {
      year: '2020',
      title: 'Transition to Digital',
      description: 'Moved into web design and discovered my passion for user experience.'
    },
    {
      year: '2021',
      title: 'UX Specialization',
      description: 'Completed Google UX Design Certificate and specialized in user research.'
    },
    {
      year: '2022',
      title: 'Lead Designer Role',
      description: 'Joined innovative startup as Lead UI/UX Designer, building design systems.'
    },
    {
      year: '2024',
      title: 'Independent Consultant',
      description: 'Launched freelance practice, helping companies create better digital experiences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div>
            <div className="relative mb-8">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Designer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="text-indigo-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                I'm a passionate UI/UX designer with over 5 years of experience creating 
                digital experiences that users love. My journey began in graphic design, 
                but I quickly discovered my true calling in the intersection of psychology, 
                technology, and beautiful design.
              </p>
              
              <p>
                I believe great design is invisible – it simply works. My approach combines 
                user research, strategic thinking, and aesthetic sensibility to create 
                solutions that are both functional and delightful.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring new technologies, 
                reading about human psychology, or capturing moments through photography. 
                I'm always curious about what makes people tick and how design can 
                make their lives better.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-indigo-600">
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;