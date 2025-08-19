import { useState, useEffect } from 'react';

/**
 * 다크모드 상태를 관리하는 커스텀 훅
 * - 시스템 설정 감지
 * - 사용자 설정 저장 및 적용
 * - 다크모드 토글 기능
 */
export const useDarkMode = () => {
  // 초기 다크모드 상태 설정
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // 로컬 스토리지에서 사용자 설정 확인
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // 시스템 환경설정 확인
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 다크모드 변경 시 HTML 클래스 및 로컬 스토리지 업데이트
  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // 사용자 설정 저장
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
