import React, { useEffect } from 'react';
// PageTitle은 이 페이지에서 사용하지 않으므로 제거
import { useIntersectionObserver, useActiveSection } from '@/hooks/useScroll';
import { scrollToElement } from '@/utils/scroll';
import { Link } from 'react-router-dom';
import AnimatedElement from '@/components/AnimatedElement';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProjectCard from '@/components/ProjectCard';
import type { ProjectData } from '@/types/ProjectData';

// 샘플 프로젝트 데이터
const sampleProjects: ProjectData[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React, TypeScript and Node.js',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://placehold.co/600x400/svg?text=E-Commerce+Project',
    link: '/projects/1',
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    tech: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: 'https://placehold.co/600x400/svg?text=Task+Manager',
    link: '/projects/2',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website with dark mode support',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://placehold.co/600x400/svg?text=Portfolio',
    link: '/projects/3',
    github: 'https://github.com/username/portfolio',
  }
];

/**
 * 모던한 홈페이지 컴포넌트
 * - 히어로 섹션
 * - 프로젝트 섹션
 * - 소개 섹션
 * - 연락처 섹션
 */
const Home: React.FC = () => {
  // 네비게이션에서 활성 섹션을 추적하기 위한 상태와 훅
  const sections = ['hero', 'projects', 'about', 'contact'];
  useActiveSection(sections, 200); // 현재 활성 섹션 추적
  
  // 스크롤 이벤트 리스너 - 이 페이지에서는 특별히 스크롤 위치를 추적할 필요가 없음
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트 처리 (필요시 여기에 로직 추가)
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 인터섹션 옵저버 훅
  const [heroVisible, heroRef] = useIntersectionObserver(0.1);
  const [projectsVisible, projectsRef] = useIntersectionObserver(0.1);
  const [aboutVisible, aboutRef] = useIntersectionObserver(0.1);
  const [contactVisible, contactRef] = useIntersectionObserver(0.1);
  
  return (
    <div className="w-full">
      {/* 히어로 섹션 */}
      <section 
        id="hero" 
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen relative flex flex-col items-center justify-center py-16 px-4 transition-opacity duration-1000 ${
          heroVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* 애니메이션 배경 */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        
        <div className="container mx-auto relative z-10">
          <AnimatedElement animation="fade-up" duration={800}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
              <span className="block">안녕하세요,</span>
              <span className="block mt-2">프론트엔드 개발자입니다.</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={800} delay={300}>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12">
              <span className="block">웹 인터페이스를 아름답게 만들고</span>
              <span className="block">사용자 경험을 향상시키는 것이 저의 열정입니다.</span>
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={800} delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToElement('projects')} 
                className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                프로젝트 보기
              </button>
              <button 
                onClick={() => scrollToElement('contact')} 
                className="px-8 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-colors"
              >
                연락하기
              </button>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="fade-down" duration={1000} delay={900}>
          <button 
            onClick={() => scrollToElement('projects')} 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="스크롤 다운"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </AnimatedElement>
      </section>
      
      {/* 프로젝트 섹션 */}
      <section 
        id="projects" 
        ref={projectsRef as React.RefObject<HTMLDivElement>}
        className={`py-24 px-4 transition-opacity duration-1000 ${
          projectsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Featured Projects
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project, index) => (
              <AnimatedElement 
                key={project.id}
                animation="fade-up" 
                duration={800} 
                delay={300 + (index * 150)}
              >
                <Link 
                  to={project.link} 
                  className="block transform hover:-translate-y-2 transition-transform duration-300 h-full"
                >
                  <ProjectCard project={project} className="h-full" />
                </Link>
              </AnimatedElement>
            ))}
          </div>
          
          <AnimatedElement animation="fade-up" duration={800} delay={800}>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 transition-opacity"
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section 
        id="about" 
        ref={aboutRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen py-24 px-4 bg-background-light dark:bg-background-dark transition-opacity duration-1000 ${
          aboutVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                About Me
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <AnimatedElement animation="fade-right" duration={800} delay={300}>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-xl">
                  <img 
                    src="https://placehold.co/300x300/svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedElement>
            </div>
            
            <div className="md:col-span-7">
              <AnimatedElement animation="fade-left" duration={800} delay={300}>
                <h3 className="text-2xl font-semibold mb-4">프론트엔드 개발자 홍길동입니다</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  5년 이상의 웹 개발 경력을 바탕으로 복잡한 문제를 해결하고 사용자 친화적인 인터페이스를 구축하는 데 전문화되어 있습니다.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  React와 TypeScript를 활용한 모던 웹 애플리케이션 개발에 열정을 가지고 있으며, 사용자 경험을 항상 최우선으로 생각합니다.
                  프로젝트에서 최신 웹 기술을 사용하여 성능이 뛰어나고 유지 관리가 쉬운 솔루션을 만드는 것을 목표로 합니다.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  협업과 지속적인 학습을 중요시하며, 팀에 긍정적인 영향을 미칠 수 있는 환경을 만들고자 합니다. 
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-up" duration={800} delay={600}>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">My Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'JavaScript', 'TypeScript', 'React', 'Next.js',
                      'Tailwind CSS', 'Node.js', 'GraphQL', 'Redux',
                      'React Query', 'Webpack', 'Vite', 'Git',
                      'Jest', 'Testing Library', 'Storybook', 'Figma'
                    ].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-up" duration={800} delay={800}>
                <div>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      {/* 연락처 섹션 */}
      <section 
        id="contact" 
        ref={contactRef as React.RefObject<HTMLDivElement>}
        className={`min-h-screen py-24 px-4 bg-background-light dark:bg-background-dark transition-opacity duration-1000 ${
          contactVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Get In Touch
              </span>
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 mt-4"></span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
              질문이나 프로젝트 의뢰가 있으신가요? 이메일을 보내거나 아래 양식을 작성해 주세요.
              빠른 시일 내에 회신드리겠습니다.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement animation="fade-right" duration={800} delay={300}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:example@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">
                      example@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +82 10-1234-5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Seoul, South Korea
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-left" duration={800} delay={300}>
              <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Send Message
                </button>
              </form>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
