import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

// 예시 프로젝트 데이터 (본문이 길고, 이미지가 여러 개 포함됨)
const exampleProjects = [
  {
    id: 999,
    title: 'Long Content Example Project',
    description: '이 프로젝트는 상세페이지의 스크롤, 긴 본문, 다양한 이미지, 기술 스택, 그리고 여러 섹션이 잘 동작하는지 테스트하기 위한 예시입니다. 실제 서비스에서는 프로젝트의 소개, 주요 기능, 사용 기술, 개발 과정, 결과물 이미지, 배운 점 등 다양한 내용을 포함할 수 있습니다.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Figma', 'Jest', 'Cypress'],
    image: 'https://placehold.co/800x400/png?text=Main+Project+Image',
    link: 'https://example.com/demo',
    github: 'https://github.com/example/long-content-project',
    // 아래는 ProjectDetail에서 사용하지 않지만, 확장성을 위해 추가
    images: [
      'https://placehold.co/600x300/png?text=Sub+Image+1',
      'https://placehold.co/600x300/png?text=Sub+Image+2',
      'https://placehold.co/600x300/png?text=Sub+Image+3',
    ],
    longContent: `\
      ## 프로젝트 개요\n\n이 프로젝트는 포트폴리오 상세페이지의 레이아웃과 스크롤, 긴 본문, 다양한 이미지, 기술 스택, 그리고 여러 섹션이 잘 동작하는지 테스트하기 위한 예시입니다.\n\n---\n\n### 주요 기능\n\n- 반응형 레이아웃\n- 다국어 지원\n- 다크/라이트 모드\n- 커스텀 커서\n- 프로젝트 상세 내비게이션\n- 다양한 이미지와 본문\n\n---\n\n### 개발 과정\n\n1. 요구사항 분석 및 설계\n2. UI/UX 디자인(Figma)\n3. 프론트엔드 개발(React, TypeScript, Tailwind CSS)\n4. 백엔드 개발(Node.js, Express, MongoDB)\n5. 배포 및 테스트(AWS, Jest, Cypress)\n\n---\n\n### 결과물 이미지\n\n아래는 프로젝트의 다양한 결과물 예시 이미지입니다.\n\n![Sub Image 1](https://placehold.co/600x300/png?text=Sub+Image+1)\n\n![Sub Image 2](https://placehold.co/600x300/png?text=Sub+Image+2)\n\n![Sub Image 3](https://placehold.co/600x300/png?text=Sub+Image+3)\n\n---\n\n### 배운 점\n\n- 컴포넌트 재사용성의 중요성\n- 다크/라이트 모드에서의 색상 대비\n- 긴 본문과 다양한 미디어가 포함된 상세페이지의 UX\n- 반응형 레이아웃의 세부 조정\n- 실제 사용자 피드백을 통한 개선\n\n---\n\n### 결론\n\n이 예시 프로젝트는 포트폴리오 상세페이지의 다양한 상황을 테스트하고, 실제 서비스에 적용할 수 있는 구조와 스타일을 제시합니다.\n`
  }
];

const ProjectDetailExample: React.FC = () => {
  return <ProjectDetail projects={exampleProjects} />;
};

export default ProjectDetailExample;
