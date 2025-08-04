'use client';

import { useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Video, 
  Server, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Menu,
  X,
  User,
  Briefcase,
  FolderOpen,
  Award,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: string;
  link?: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

interface PortfolioData {
  about: {
    title: string;
    description: string;
    experience: string;
    location: string;
  };
  services: Service[];
  projects: Project[];
  skills: Skill[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

const defaultData: PortfolioData = {
  about: {
    title: "Fullstack Developer & IT Professional",
    description: "With over 8 years of experience in fullstack development, graphic design, video editing, IT services, and CCTV installation/maintenance. I specialize in creating robust web applications and providing comprehensive IT solutions. My expertise spans from modern web technologies to network infrastructure and security systems. I'm passionate about delivering high-quality solutions that drive business growth and am fully equipped for remote work collaboration.",
    experience: "8+ Years",
    location: "Lagos, Nigeria"
  },
  services: [
    {
      id: "1",
      title: "Fullstack Development",
      description: "Building modern web applications with cutting-edge technologies",
      icon: "Code",
      technologies: ["PHP", "Laravel", "Next.js", "React", "MySQL", "Node.js"]
    },
    {
      id: "2",
      title: "Graphic Design",
      description: "Creating stunning visual designs for digital and print media",
      icon: "Palette",
      technologies: ["Photoshop", "Illustrator", "Canva", "InDesign"]
    },
    {
      id: "3", 
      title: "Video Editing",
      description: "Professional video editing and motion graphics",
      icon: "Video",
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
    },
    {
      id: "4",
      title: "IT Services",
      description: "Network setup, configuration, and maintenance",
      icon: "Server",
      technologies: ["MikroTik", "LAN/WLAN", "Network Security", "System Admin"]
    },
    {
      id: "5",
      title: "CCTV Installation & Maintenance",
      description: "Security camera systems installation and ongoing support",
      icon: "Camera",
      technologies: ["IP Cameras", "DVR/NVR", "Access Control", "Monitoring"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Staff ID Card Generator",
      description: "Automated system for generating professional staff ID cards with batch processing capabilities, integrated with HR database.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      metrics: "500+ records/month",
      image: "https://images.pexels.com/photos/7821919/pexels-photo-7821919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "2", 
      title: "Automated Email System",
      description: "Robust email automation platform with template management, scheduling, and analytics tracking for marketing campaigns.",
      technologies: ["PHP", "MySQL", "HTML/CSS", "Cron Jobs"],
      metrics: "1,000+ emails/year",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "3",
      title: "Gala Ticketing System", 
      description: "Complete event ticketing platform with QR code generation, payment integration, and real-time attendance tracking.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Payment Gateway"],
      metrics: "300+ tickets processed",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "4",
      title: "thenuyi.com",
      description: "Modern e-commerce platform with inventory management, order processing, and customer portal.",
      technologies: ["Next.js", "React", "Tailwind CSS", "MySQL"],
      metrics: "Active e-commerce site",
      link: "https://thenuyi.com",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "5",
      title: "anchornews.ng",
      description: "News publication website with content management system, SEO optimization, and social media integration.",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Themes"],
      metrics: "News publication platform",
      link: "https://anchornews.ng",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],
  skills: [
    { name: "PHP", level: 95, category: "Backend" },
    { name: "Laravel", level: 90, category: "Backend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "MySQL", level: 90, category: "Database" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 92, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "Photoshop", level: 90, category: "Design" },
    { name: "Illustrator", level: 85, category: "Design" },
    { name: "Premiere Pro", level: 88, category: "Video" },
    { name: "MikroTik", level: 80, category: "Network" },
    { name: "CCTV Systems", level: 85, category: "Security" },
    { name: "Git", level: 85, category: "Tools" }
  ],
  contact: {
    email: "ibrahim.runmonkun@email.com",
    phone: "+234-XXX-XXX-XXXX",
    location: "Lagos, Nigeria", 
    linkedin: "https://linkedin.com/in/ibrahim-runmonkun",
    github: "https://github.com/ibrahim-runmonkun"
  }
};

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Code,
      Palette,
      Video,
      Server,
      Camera
    };
    const IconComponent = icons[iconName] || Code;
    return <IconComponent className="w-8 h-8" />;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - for now just show alert
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Design', 'Video', 'Network', 'Security', 'Tools'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">Ibrahim Runmonkun</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#projects" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                <a href="#skills" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <Link href="/cms" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  CMS Dashboard
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95">
              <a href="#about" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#services" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#projects" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <Link href="/cms" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                CMS Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ibrahim Runmonkun
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-6">
              {data.about.title}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <MapPin className="w-4 h-4 mr-1" />
                {data.about.location}
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                {data.about.experience} Experience
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                🌍 Remote Ready
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-96 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <User className="w-24 h-24 text-slate-400" />
              </div>
            </div>
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {data.about.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Experience</h4>
                  <p className="text-blue-400 text-xl font-bold">{data.about.experience}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-slate-300">{data.about.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-600/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-blue-400 border-blue-400/50">
                      {project.metrics}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <div className="space-y-4">
                  {data.skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-300 text-sm">{skill.name}</span>
                          <span className="text-blue-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
              <p className="text-slate-300 mb-8">
                Ready to start your next project? I'm available for remote work and would love to discuss how I can help bring your ideas to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-slate-300">{data.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-slate-300">{data.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-slate-300">{data.contact.location}</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      rows={4}
                      required
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Ibrahim Runmonkun. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}