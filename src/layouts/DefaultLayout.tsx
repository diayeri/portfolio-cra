import React from 'react';
import Header from '../components/Header';

// DefaultLayout 컴포넌트 props 타입 정의
interface DefaultLayoutProps {
  children: React.ReactNode;
}

/**
 * 기본 레이아웃 컴포넌트
 * - Header, Main Content, Footer 포함
 * - 공통 레이아웃 구조 제공
 */
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 - 자식 요소 포함 */}
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        {children}
      </main>
      
      {/* 푸터 */}
      <footer className="p-4 md:p-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
