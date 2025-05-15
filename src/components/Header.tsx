import { useDarkMode } from '../hooks/useDarkMode';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

/**
 * 헤더 컴포넌트
 * - 로고/타이틀
 * - 다크모드 토글 버튼
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  // 다크모드 훅 사용
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`p-4 md:p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
      </div>
      
      {/* 다크모드 토글 버튼 */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors duration-300"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
