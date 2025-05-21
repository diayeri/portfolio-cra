import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ProjectCard from '../components/ProjectCard';
import AnimatedElement from '../components/AnimatedElement';
import type { ProjectData } from '../types/ProjectData';

/**
 * 프로젝트 전체보기 컴포넌트
 * - 필터링 가능한 프로젝트 갤러리
 * - 애니메이션 효과 적용
 * - 프로젝트 상세 페이지로 연결
 */
// 프로젝트 목록 데이터를 컴포넌트 외부로 이동
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React, TypeScript and Tailwind CSS. Features modern design, dark mode, and responsive layout.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://placehold.co/400x250/svg?text=Portfolio',
    link: '/projects/3',
    github: 'https://github.com/username/portfolio'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'An online shopping platform with product listings, cart functionality, and checkout process. Includes user authentication, product filtering, and payment integration.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://placehold.co/400x250/svg?text=E-commerce',
    link: '/projects/1',
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines. Features include drag-and-drop task organization, priority levels, and progress tracking.',
    tech: ['React', 'Firebase', 'Material UI', 'Redux'],
    image: 'https://placehold.co/400x250/svg?text=Task+App',
    link: '/projects/2',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with location-based forecasts. Features interactive maps, hourly forecasts, and severe weather alerts.',
    tech: ['JavaScript', 'Weather API', 'Chart.js', 'Leaflet'],
    image: 'https://placehold.co/400x250/svg?text=Weather+App',
    link: '#',
    github: 'https://github.com/username/weather-app'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media platforms that integrates multiple accounts and provides engagement metrics and content performance data.',
    tech: ['React', 'D3.js', 'Node.js', 'OAuth'],
    image: 'https://placehold.co/400x250/svg?text=Social+Media',
    link: '#',
    github: 'https://github.com/username/social-dashboard'
  },
  {
    id: 6,
    title: 'Recipe Finder App',
    description: 'A web application for discovering recipes based on available ingredients, dietary restrictions, and cuisine preferences.',
    tech: ['React', 'Recipe API', 'Firebase', 'Tailwind CSS'],
    image: 'https://placehold.co/400x250/svg?text=Recipe+App',
    link: '#'
  }
];

const Projects: React.FC = () => {
  // 필터링을 위한 상태 관리
  const [filter, setFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projectsData);
  
  // 기술 스택에서 고유한 태그들 추출
  const allTags = [...new Set(projectsData.flatMap(project => project.tech))].sort();
  
  // 필터링 로직
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        project.tech.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <AnimatedElement animation="fade-up" duration={800}>
        <PageTitle title="Projects" />
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, personal projects, and experiments across various technologies and domains.
          </p>
        </header>
      </AnimatedElement>
      
      {/* 필터링 태그 */}
      <AnimatedElement animation="fade-up" duration={800} delay={200}>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button 
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'All' 
                ? 'bg-primary-light dark:bg-primary-dark text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button 
              key={tag}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === tag 
                  ? 'bg-primary-light dark:bg-primary-dark text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </AnimatedElement>
      
      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <AnimatedElement 
            key={project.id} 
            animation="fade-up" 
            duration={800} 
            delay={300 + index * 100}
          >
            <Link 
              to={project.link.startsWith('/') ? project.link : '#'} 
              className="block h-full transform hover:-translate-y-2 transition-transform duration-300"
            >
              <ProjectCard project={project} className="h-full" />
            </Link>
          </AnimatedElement>
        ))}
      </div>
      
      {/* 프로젝트가 없을 경우 메시지 표시 */}
      {filteredProjects.length === 0 && (
        <AnimatedElement animation="fade-up" duration={800}>
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No projects match the selected filter.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg"
              onClick={() => setFilter('All')}
            >
              Show All Projects
            </button>
          </div>
        </AnimatedElement>
      )}
      
      {/* CTA 섹션 */}
      <AnimatedElement animation="fade-up" duration={800} delay={600}>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // 프로젝트 페이지에서는 메인 페이지로 이동 후 contact 섹션으로 스크롤
              window.location.href = '/#contact';
            }}
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Projects;
