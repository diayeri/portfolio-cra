import React from 'react';

interface LanguageSwitchProps {
  language: 'ko' | 'en';
  onToggle: () => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className='ml-2 px-2 py-1 rounded text-xs font-semibold border border-secondary-light dark:border-secondary-dark bg-surface-light dark:bg-surface-dark hover:bg-secondary-light dark:hover:bg-surface-dark'
      aria-label='언어 변경'
    >
      {language === 'ko' ? 'EN' : '한글'}
    </button>
  );
};

export default LanguageSwitch;
