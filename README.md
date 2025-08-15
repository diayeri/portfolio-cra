# UI Dev Portfolio - DY

개인 웹 개발 포트폴리오 사이트로, 최신 웹 기술을 활용하여 **깔끔하고 직관적인 사용자 경험**을 제공합니다.
반응형 디자인과 다크 모드를 지원하여 어떤 환경에서도 편하게 탐색할 수 있습니다.

## 🌟 주요 특징

- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱까지 최적화
- 🌙 **다크 모드 지원**: 사용자가 선호하는 테마를 저장
- 🚀 **빠른 로딩**: 최적화된 코드와 이미지로 쾌적한 경험 제공
- 📊 **프로젝트 갤러리**: 필터링으로 원하는 프로젝트 쉽게 확인
- 📝 **연락처 폼**: 간편하게 문의 가능
- 📈 **분석 도구 연동**: Google Analytics로 방문자 데이터 확인 (선택)

---

## 🛠️ 기술 스택

- **Frontend**: React, TypeScript, Tailwind CSS, React Router
- **빌드 도구**: Vite
- **분석/추적**: Google Analytics (선택)

---

## 📁 폴더 구조

```
my-portfolio/
├── public/                  # 파비콘, 이미지 등 정적 파일
├── src/                     # 소스 코드
│   ├── assets/              # 이미지, 글꼴 등
│   ├── components/          # 재사용 컴포넌트
│   ├── hooks/               # 커스텀 훅
│   ├── layouts/             # 레이아웃 컴포넌트
│   ├── pages/               # 페이지 컴포넌트
│   ├── types/               # TypeScript 타입 정의
│   ├── utils/               # 유틸리티 함수
│   ├── App.tsx              # 메인 컴포넌트
│   ├── main.tsx             # 앱 진입점
│   └── index.css            # 전역 CSS
├── .env                     # 환경 변수 (비공개)
├── .env.example             # 환경 변수 예시
├── eslint.config.js         # ESLint 설정
├── tailwind.config.js       # Tailwind CSS 설정
├── tsconfig.json            # TypeScript 설정
└── vite.config.ts           # Vite 설정
```

---

## 🚀 설치 & 실행

### 사전 요구사항

- Node.js v18 이상
- npm v9 이상 또는 Yarn v1.22 이상

### 설치 및 실행

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
npm install       # 또는 yarn install
cp .env.example .env
npm run dev       # 또는 yarn dev
```

브라우저에서 `http://localhost:5173`로 접속하면 바로 확인 가능합니다.

### 빌드 및 배포

```bash
npm run build     # 또는 yarn build
```

- 생성된 `dist` 폴더를 GitHub Pages, Vercel, Netlify 등의 무료 호스팅 서비스로 배포 가능
- 레포는 비공개로 유지하면서 `gh-pages` 브랜치만 공개해 사이트를 라이브로 운영 가능

---

## 🔧 커스터마이징

- **개인 정보**: `src/pages`와 `public` 폴더의 이미지/텍스트 수정
- **색상 테마**: `tailwind.config.js`에서 색상 변경
- **Google Analytics**: `.env` 파일에서 `VITE_APP_GA_ID` 설정

---

## 📄 라이센스

- 상업적 이용, 재배포, 복사, 수정 등은 금지합니다.
- 레포가 공개될 경우에도 저작권은 여전히 보호되며, 다른 사람이 임의로 가져가거나 사용하는 것은 허용되지 않습니다.
- 라이센스: CC BY-NC-ND 4.0
