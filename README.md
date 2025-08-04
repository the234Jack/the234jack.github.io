# Ibrahim Runmonkun - Professional Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a comprehensive CMS dashboard for content management.

## Features

### Portfolio Website
- **Modern Design**: Clean, professional design with dark theme and blue accents
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **SEO Optimized**: Proper meta tags, semantic HTML, and search engine friendly structure

### Content Sections
- **About**: Personal introduction with experience highlights and location
- **Services**: Detailed service offerings with technologies and descriptions
- **Projects**: Showcase of completed projects with metrics and screenshots
- **Skills**: Visual skill representation with proficiency levels across categories
- **Contact**: Contact information, social links, and functional contact form

### CMS Dashboard
- **Content Management**: Full CRUD operations for all portfolio sections
- **Real-time Editing**: Live editing of about information, services, projects, and skills
- **Technology Management**: Add/remove technologies for projects and services
- **Data Persistence**: Local storage for content persistence
- **Import/Export**: Reset to defaults and save changes functionality

## Technology Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icons
- **Deployment**: GitHub Pages compatible (static export)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ibrahim-portfolio.git
cd ibrahim-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder, ready for deployment on GitHub Pages.

## Deployment on GitHub Pages

1. **Repository Setup**:
   - Create a new repository on GitHub
   - Push your code to the repository

2. **GitHub Pages Configuration**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch (or main if using GitHub Actions)

3. **Automatic Deployment** (Recommended):
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## Content Management

### Accessing the CMS
1. Visit `/cms` on your deployed site
2. Use the tabbed interface to edit different sections
3. Click "Save Changes" to persist your updates
4. Use "Reset to Default" to restore original content

### Content Structure

#### About Section
- Title and professional headline
- Description and experience summary
- Location and years of experience

#### Services
- Service title and description
- Associated technologies
- Icon selection from predefined options

#### Projects
- Project title, description, and metrics
- Technology stack used
- Project images and external links
- Performance metrics and achievements

#### Skills
- Skill name and proficiency level (0-100%)
- Category assignment (Frontend, Backend, etc.)
- Visual progress bars for each skill

#### Contact Information
- Email, phone, and location
- Social media links (LinkedIn, GitHub)
- Contact form for inquiries

## Customization

### Design Modifications
- Edit `tailwind.config.ts` for color scheme changes
- Modify component styles in individual component files
- Update `globals.css` for global style overrides

### Content Defaults
- Modify `defaultData` object in both `page.tsx` and `cms/page.tsx`
- Update project images by replacing Pexels URLs
- Customize skill categories and proficiency levels

### Adding New Sections
1. Update the data interfaces
2. Add new tab to CMS dashboard
3. Create corresponding UI components
4. Implement CRUD operations

## Features Highlights

### Professional Portfolio
- **Hero Section**: Prominent introduction with call-to-action buttons
- **Project Showcase**: Visual project gallery with detailed descriptions
- **Skills Visualization**: Progress bars showing proficiency levels
- **Service Offerings**: Comprehensive service descriptions with technologies
- **Contact Integration**: Multiple contact methods and inquiry form

### CMS Dashboard
- **Intuitive Interface**: Tabbed navigation for different content types
- **Real-time Preview**: Changes reflect immediately on save
- **Technology Management**: Dynamic addition/removal of technology tags
- **Data Validation**: Form validation ensures data integrity
- **Backup/Restore**: Easy reset to default content when needed

### Performance & SEO
- **Static Generation**: Fast loading times with static site generation
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Mobile First**: Responsive design optimized for all devices
- **Accessibility**: Semantic HTML and proper ARIA labels

## Support

For questions or support, please contact:
- Email: ibrahim.runmonkun@email.com
- LinkedIn: [Ibrahim Runmonkun](https://linkedin.com/in/ibrahim-runmonkun)
- GitHub: [Ibrahim Runmonkun](https://github.com/ibrahim-runmonkun)

## License

This project is licensed under the MIT License - see first use is for Ibrahim Runmonkun's personal portfolio.