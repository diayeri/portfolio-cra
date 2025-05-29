import { createContext } from 'react';

const LanguageContext = createContext<'ko' | 'en'>('ko');

export default LanguageContext;
