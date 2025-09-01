export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  href: string;
  thumb: string;
  tags: string[];
  status: 'Novo' | 'Concluído' | 'Em desenvolvimento';
  color: string;
}

export const TEMPLATES: Template[] = [
  {
    id: 'gaming',
    name: 'Landing Page Gaming',
    description: 'Template de curso/produto com design gaming e elementos neon',
    category: 'Curso Online',
    href: '/original',
    thumb: '/thumbs/gaming.webp',
    tags: ['React', 'TypeScript', 'Tailwind', 'Gaming'],
    status: 'Concluído',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'filmagente',
    name: 'FilmAgente Style',
    description: 'Landing page inspirada no FilmAgente para cursos de criação de vídeos com IA',
    category: 'Vídeo/IA',
    href: '/film-example',
    thumb: '/thumbs/filmagente.webp',
    tags: ['IA', 'Vídeos', 'Storytelling'],
    status: 'Novo',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'restaurante-curso',
    name: 'Restaurante Curso',
    description: 'Landing page completa para curso sobre marketing de restaurantes',
    category: 'Educação/Food',
    href: '/restaurante-curso',
    thumb: '/thumbs/restaurante-curso.webp',
    tags: ['Marketing', 'Restaurante', 'Curso', 'Rosa/Roxo'],
    status: 'Novo',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'edicao-imagens-ia',
    name: 'Curso Edição de Imagens com IA',
    description: 'Template do curso de edição de imagens com IA',
    category: 'Design/IA',
    href: '/edicao-imagens-ia',
    thumb: '/thumbs/edicao-imagens-ia.webp',
    tags: ['IA', 'Edição', 'Imagens'],
    status: 'Novo',
    color: 'from-emerald-500 to-cyan-500'
  },
  {
    id: 'template-1',
    name: 'Template 1 - Edição de Vídeo com IA',
    description: 'Template completo para curso de edição de vídeos com IA - clone profissional',
    category: 'Vídeo/IA',
    href: '/template-1',
    thumb: '/thumbs/template-1.webp',
    tags: ['IA', 'Vídeos', 'CapCut', 'Purple/Pink'],
    status: 'Novo',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'gestao-saude',
    name: 'Curso Gestão em Saúde',
    description: 'Template moderno e profissional para cursos de gestão hospitalar e clínica',
    category: 'Saúde/Gestão',
    href: '/gestao-saude',
    thumb: '/thumbs/gestao-saude.webp',
    tags: ['Saúde', 'Gestão', 'Hospitalar', 'Blue/Cyan'],
    status: 'Novo',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'foto-produto-ia',
    name: 'Foto Produto IA Pro',
    description: 'Landing page para curso de fotos profissionais de produto usando IA - multiplicando vendas',
    category: 'IA/E-commerce',
    href: '/foto-produto-ia',
    thumb: '/thumbs/foto-produto-ia.webp',
    tags: ['IA', 'Fotografia', 'E-commerce', 'Vendas', 'Emerald/Cyan'],
    status: 'Novo',
    color: 'from-emerald-600 to-cyan-600'
  },
  {
    id: 'jaimevieira',
    name: 'Jaime Vieira Portfolio',
    description: 'Landing page minimalista com foco no domínio e redes sociais - design clean e profissional',
    category: 'Portfolio/Pessoal',
    href: '/jaimevieira',
    thumb: '/thumbs/jaimevieira.webp',
    tags: ['Portfolio', 'Minimal', 'Social Media', 'Purple/Blue'],
    status: 'Novo',
    color: 'from-purple-600 to-blue-600'
  }
];
