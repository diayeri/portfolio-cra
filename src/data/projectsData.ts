export interface ProjectsData {
  id: string;
  title: string;
  startDate: string;
  endDate?: string | null; // 없으면 진행중
  category: string;
  tech: string[];
  client: string;

  featured?: {
    order: number;
    cover: string;
  };

  links?: string[];
  github?: string;

  description?: string;
  images?: string[];
}

export const projectsData: ProjectsData[] = [
  {
    id: 'chromatic',
    title: 'Chromatic Protocol',
    startDate: '2023.03',
    endDate: '2024.04',
    category: 'UI Dev',
    tech: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    client: 'Quarkonix',
    featured: {
      order: 1,
      cover:
        'https://github.com/user-attachments/assets/b3ce149f-f78d-4324-b917-00e35797fc05',
    },
    links: [
      'https://app.chromatic.finance/',
      'https://www.chromatic.finance/',
      // 'https://chromatic.gitbook.io/docs',
    ],
    github: 'https://github.com/chromatic-protocol/frontend-archive',
    description: `Arbitrum 기반의 탈 중앙화 선물 거래 프로토콜로, Oracle Price Feed에 연동된 가격을 바탕으로 선물 시장을 생성하고 거래할 수 있는 블록체인 기반 트레이딩 플랫폼입니다.`,
  },
  {
    id: 'rounz',
    title: 'Rounz E-Commerce, Admin',
    startDate: '2024.12',
    endDate: '2025.05',
    category: 'Frontend',
    tech: ['React', 'TypeScript', 'Recoil', 'SCSS', 'MUI', 'jQuery'],
    client: '이스트소프트',
    featured: {
      order: 2,
      cover:
        'https://github.com/user-attachments/assets/4c6203cf-8d83-447b-bd11-ad937a251677',
    },
  },
  {
    id: 'muna',
    title: 'Muna',
    startDate: '2024.09',
    endDate: '2024.10',
    category: 'Frontend',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Firebase', 'SCSS', 'Figma'],
    client: '이스트소프트 프론트엔드 부트캠프 1기',
    featured: {
      order: 3,
      cover:
        'https://github.com/user-attachments/assets/82f209a0-a197-4778-b3de-aca04c43e6dc',
    },
  },
  {
    id: 'klaybay',
    title: 'Klaybay, Admin',
    startDate: '2022.03',
    endDate: '2023.02',
    category: 'UI Dev',
    tech: ['React', 'MUI', 'SCSS', 'Storybook'],
    client: 'Krust Universe',
    featured: {
      order: 4,
      cover:
        'https://github.com/user-attachments/assets/d705c180-cf71-4328-a2e4-d439d5495eae',
    },
  },
  {
    id: 'stichy',
    title: 'Stichy',
    startDate: '2020.10',
    endDate: '2021.04',
    category: 'UI Dev',
    tech: ['SCSS', 'Bootstrap'],
    client: 'Cocone',
    featured: {
      order: 5,
      cover:
        'https://github.com/user-attachments/assets/5e3ee3e1-c200-4f9f-8f35-776ef946170a',
    },
  },
  {
    id: 'miral-payment',
    title: 'Miral Payment Renewal',
    startDate: '2019.03',
    endDate: '2020.01',
    category: 'Design',
    tech: ['Photoshop'],
    client: '밀알복지재단',
    featured: {
      order: 6,
      cover:
        'https://github.com/user-attachments/assets/c103437e-adc3-4e14-9c1b-f29e8fc215ba',
    },
  },
];
