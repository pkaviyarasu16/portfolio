import React from 'react';
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  Zap,
  Users,
  TrendingUp,
  Layers,
  PenTool
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design Tools',
      icon: <PenTool className="h-8 w-8" />,
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe Creative Suite', level: 90 },
        { name: 'Sketch', level: 85 },
        { name: 'Principle', level: 80 }
      ]
    },
    {
      title: 'Development',
      icon: <Monitor className="h-8 w-8" />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'User Experience',
      icon: <Users className="h-8 w-8" />,
      skills: [
        { name: 'User Research', level: 90 },
        { name: 'Information Architecture', level: 85 },
        { name: 'Usability Testing', level: 88 },
        { name: 'Design Systems', level: 92 }
      ]
    },
    {
      title: 'Strategy',
      icon: <TrendingUp className="h-8 w-8" />,
      skills: [
        { name: 'Brand Strategy', level: 85 },
        { name: 'Product Strategy', level: 80 },
        { name: 'Market Research', level: 75 },
        { name: 'Competitive Analysis', level: 85 }
      ]
    }
  ];

  const designServices = [
    {
      icon: <Palette className="h-12 w-12 text-indigo-600" />,
      title: 'Visual Design',
      description: 'Creating stunning visual interfaces that capture attention and communicate effectively.'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-emerald-600" />,
      title: 'Mobile Design',
      description: 'Designing intuitive mobile experiences optimized for touch and on-the-go usage.'
    },
    {
      icon: <Monitor className="h-12 w-12 text-purple-600" />,
      title: 'Web Design',
      description: 'Building responsive web designs that work beautifully across all devices and browsers.'
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-600" />,
      title: 'Prototyping',
      description: 'Creating interactive prototypes to test and validate design concepts early.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'User Research',
      description: 'Understanding user needs through research to inform design decisions.'
    },
    {
      icon: <Layers className="h-12 w-12 text-teal-600" />,
      title: 'Design Systems',
      description: 'Building scalable design systems that ensure consistency across products.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of designing digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {designServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="text-indigo-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;