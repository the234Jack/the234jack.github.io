'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { ArrowLeft, Plus, Edit, Trash2, Save, User, Briefcase, FolderOpen, Award, Phone, Upload } from 'lucide-react';
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

export default function CMS() {
  const [data, setData] = useState<PortfolioData>(defaultData);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [newTechnology, setNewTechnology] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const saveData = () => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
    alert('Data saved successfully!');
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.setItem('portfolioData', JSON.stringify(defaultData));
    alert('Data reset to default!');
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      if (editingProject.id) {
        // Update existing project
        setData(prev => ({
          ...prev,
          projects: prev.projects.map(p => p.id === editingProject.id ? editingProject : p)
        }));
      } else {
        // Add new project
        const newProject = { ...editingProject, id: Date.now().toString() };
        setData(prev => ({
          ...prev,
          projects: [...prev.projects, newProject]
        }));
      }
      setEditingProject(null);
    }
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      if (editingService.id) {
        // Update existing service
        setData(prev => ({
          ...prev,
          services: prev.services.map(s => s.id === editingService.id ? editingService : s)
        }));
      } else {
        // Add new service
        const newService = { ...editingService, id: Date.now().toString() };
        setData(prev => ({
          ...prev,
          services: [...prev.services, newService]
        }));
      }
      setEditingService(null);
    }
  };

  const handleSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSkill) {
      const existingIndex = data.skills.findIndex(s => s.name === editingSkill.name && s.category === editingSkill.category);
      if (existingIndex >= 0) {
        // Update existing skill
        setData(prev => ({
          ...prev,
          skills: prev.skills.map((s, i) => i === existingIndex ? editingSkill : s)
        }));
      } else {
        // Add new skill
        setData(prev => ({
          ...prev,
          skills: [...prev.skills, editingSkill]
        }));
      }
      setEditingSkill(null);
    }
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const deleteService = (id: string) => {
    setData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  const deleteSkill = (name: string, category: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => !(s.name === name && s.category === category))
    }));
  };

  const addTechnology = (type: 'project' | 'service') => {
    if (!newTechnology.trim()) return;
    
    if (type === 'project' && editingProject) {
      setEditingProject({
        ...editingProject,
        technologies: [...editingProject.technologies, newTechnology.trim()]
      });
    } else if (type === 'service' && editingService) {
      setEditingService({
        ...editingService,
        technologies: [...editingService.technologies, newTechnology.trim()]
      });
    }
    setNewTechnology('');
  };

  const removeTechnology = (index: number, type: 'project' | 'service') => {
    if (type === 'project' && editingProject) {
      setEditingProject({
        ...editingProject,
        technologies: editingProject.technologies.filter((_, i) => i !== index)
      });
    } else if (type === 'service' && editingService) {
      setEditingService({
        ...editingService,
        technologies: editingService.technologies.filter((_, i) => i !== index)
      });
    }
  };

  const skillCategories = ['Frontend', 'Backend', 'Database', 'Design', 'Video', 'Network', 'Security', 'Tools'];
  const iconOptions = ['Code', 'Palette', 'Video', 'Server', 'Camera'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-950/90 border-b border-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-slate-300 hover:text-white">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Portfolio CMS Dashboard</h1>
          </div>
          <div className="flex space-x-2">
            <Button onClick={saveData} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Reset to Default</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-slate-800 border-slate-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Reset Data</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-300">
                    This will reset all data to default values. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-slate-700 text-white hover:bg-slate-600">Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={resetData} className="bg-red-600 hover:bg-red-700">
                    Reset
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800">
            <TabsTrigger value="about" className="data-[state=active]:bg-blue-600">
              <User className="w-4 h-4 mr-2" />
              About
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-blue-600">
              <Briefcase className="w-4 h-4 mr-2" />
              Services
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-blue-600">
              <FolderOpen className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-blue-600">
              <Award className="w-4 h-4 mr-2" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">About Section</CardTitle>
                <CardDescription className="text-slate-300">
                  Edit your personal information and introduction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Title</Label>
                  <Input
                    id="title"
                    value={data.about.title}
                    onChange={(e) => setData({...data, about: {...data.about, title: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="experience" className="text-white">Experience</Label>
                  <Input
                    id="experience"
                    value={data.about.experience}
                    onChange={(e) => setData({...data, about: {...data.about, experience: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-white">Location</Label>
                  <Input
                    id="location"
                    value={data.about.location}
                    onChange={(e) => setData({...data, about: {...data.about, location: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea
                    id="description"
                    value={data.about.description}
                    onChange={(e) => setData({...data, about: {...data.about, description: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Services</h2>
                <Button
                  onClick={() => setEditingService({
                    id: '',
                    title: '',
                    description: '',
                    icon: 'Code',
                    technologies: []
                  })}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.services.map((service) => (
                  <Card key={service.id} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {service.title}
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingService(service)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-slate-800 border-slate-700">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-white">Delete Service</AlertDialogTitle>
                                <AlertDialogDescription className="text-slate-300">
                                  Are you sure you want to delete "{service.title}"?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-slate-700 text-white hover:bg-slate-600">Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteService(service.id)} className="bg-red-600 hover:bg-red-700">
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </CardTitle>
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

              {editingService && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingService.id ? 'Edit Service' : 'Add New Service'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleServiceSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="serviceTitle" className="text-white">Title</Label>
                        <Input
                          id="serviceTitle"
                          value={editingService.title}
                          onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="serviceIcon" className="text-white">Icon</Label>
                        <Select value={editingService.icon} onValueChange={(value) => setEditingService({...editingService, icon: value})}>
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            {iconOptions.map((icon) => (
                              <SelectItem key={icon} value={icon} className="text-white hover:bg-slate-600">
                                {icon}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="serviceDescription" className="text-white">Description</Label>
                        <Textarea
                          id="serviceDescription"
                          value={editingService.description}
                          onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-white">Technologies</Label>
                        <div className="flex space-x-2 mb-2">
                          <Input
                            value={newTechnology}
                            onChange={(e) => setNewTechnology(e.target.value)}
                            placeholder="Add technology..."
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                          <Button type="button" onClick={() => addTechnology('service')} size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {editingService.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                              <button
                                type="button"
                                onClick={() => removeTechnology(index, 'service')}
                                className="ml-1 text-red-400 hover:text-red-300"
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          {editingService.id ? 'Update' : 'Add'} Service
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setEditingService(null)} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Projects</h2>
                <Button
                  onClick={() => setEditingProject({
                    id: '',
                    title: '',
                    description: '',
                    technologies: [],
                    metrics: '',
                    link: '',
                    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
                  })}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.projects.map((project) => (
                  <Card key={project.id} className="bg-slate-800/50 border-slate-700">
                    <div className="relative h-32 overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between">
                        {project.title}
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingProject(project)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-slate-800 border-slate-700">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-white">Delete Project</AlertDialogTitle>
                                <AlertDialogDescription className="text-slate-300">
                                  Are you sure you want to delete "{project.title}"?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-slate-700 text-white hover:bg-slate-600">Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteProject(project.id)} className="bg-red-600 hover:bg-red-700">
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="text-blue-400 border-blue-400/50 mb-2">
                        {project.metrics}
                      </Badge>
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

              {editingProject && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingProject.id ? 'Edit Project' : 'Add New Project'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProjectSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="projectTitle" className="text-white">Title</Label>
                        <Input
                          id="projectTitle"
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDescription" className="text-white">Description</Label>
                        <Textarea
                          id="projectDescription"
                          value={editingProject.description}
                          onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectMetrics" className="text-white">Metrics</Label>
                        <Input
                          id="projectMetrics"
                          value={editingProject.metrics}
                          onChange={(e) => setEditingProject({...editingProject, metrics: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="e.g., 500+ records/month"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectLink" className="text-white">Project Link (Optional)</Label>
                        <Input
                          id="projectLink"
                          value={editingProject.link || ''}
                          onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="https://example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectImage" className="text-white">Image URL</Label>
                        <Input
                          id="projectImage"
                          value={editingProject.image}
                          onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="https://images.pexels.com/..."
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-white">Technologies</Label>
                        <div className="flex space-x-2 mb-2">
                          <Input
                            value={newTechnology}
                            onChange={(e) => setNewTechnology(e.target.value)}
                            placeholder="Add technology..."
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                          <Button type="button" onClick={() => addTechnology('project')} size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {editingProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                              <button
                                type="button"
                                onClick={() => removeTechnology(index, 'project')}
                                className="ml-1 text-red-400 hover:text-red-300"
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          {editingProject.id ? 'Update' : 'Add'} Project
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setEditingProject(null)} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Skills</h2>
                <Button
                  onClick={() => setEditingSkill({
                    name: '',
                    level: 50,
                    category: 'Frontend'
                  })}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                  <Card key={category} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">{category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {data.skills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <span className="text-slate-300 text-sm">{skill.name}</span>
                                <span className="text-blue-400 text-sm">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex space-x-1 ml-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditingSkill(skill)}
                                className="border-slate-600 text-slate-300 hover:bg-slate-700 p-1"
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button size="sm" variant="destructive" className="p-1">
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-slate-800 border-slate-700">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="text-white">Delete Skill</AlertDialogTitle>
                                    <AlertDialogDescription className="text-slate-300">
                                      Are you sure you want to delete "{skill.name}"?
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel className="bg-slate-700 text-white hover:bg-slate-600">Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteSkill(skill.name, skill.category)} className="bg-red-600 hover:bg-red-700">
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {editingSkill && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {data.skills.some(s => s.name === editingSkill.name && s.category === editingSkill.category) ? 'Edit Skill' : 'Add New Skill'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSkillSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="skillName" className="text-white">Skill Name</Label>
                        <Input
                          id="skillName"
                          value={editingSkill.name}
                          onChange={(e) => setEditingSkill({...editingSkill, name: e.target.value})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="skillCategory" className="text-white">Category</Label>
                        <Select value={editingSkill.category} onValueChange={(value) => setEditingSkill({...editingSkill, category: value})}>
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600">
                            {skillCategories.map((category) => (
                              <SelectItem key={category} value={category} className="text-white hover:bg-slate-600">
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="skillLevel" className="text-white">Proficiency Level (%)</Label>
                        <Input
                          id="skillLevel"
                          type="number"
                          min="0"
                          max="100"
                          value={editingSkill.level}
                          onChange={(e) => setEditingSkill({...editingSkill, level: parseInt(e.target.value)})}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          {data.skills.some(s => s.name === editingSkill.name && s.category === editingSkill.category) ? 'Update' : 'Add'} Skill
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setEditingSkill(null)} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-slate-300">
                  Update your contact details and social links
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => setData({...data, contact: {...data.contact, email: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    value={data.contact.phone}
                    onChange={(e) => setData({...data, contact: {...data.contact, phone: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="contactLocation" className="text-white">Location</Label>
                  <Input
                    id="contactLocation"
                    value={data.contact.location}
                    onChange={(e) => setData({...data, contact: {...data.contact, location: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin" className="text-white">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={data.contact.linkedin}
                    onChange={(e) => setData({...data, contact: {...data.contact, linkedin: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="github" className="text-white">GitHub URL</Label>
                  <Input
                    id="github"
                    value={data.contact.github}
                    onChange={(e) => setData({...data, contact: {...data.contact, github: e.target.value}})}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}