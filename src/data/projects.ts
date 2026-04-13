/** 单个项目卡片所需字段（与 PRD 项目展示一致） */
export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  imageUrl: string
  href: string
}

/** 项目数据：占位条目可增删，截图建议换成本地 public/ 或 CDN 资源 */
export const projects: Project[] = [
  {
    id: 'sample-1',
    name: '个人作品集',
    description:
      '基于 React、TypeScript 与 Tailwind 的响应式作品集站点，深色主题与渐变强调。',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/800x480/0f0f12/a78bfa?text=Portfolio',
    href: '#',
  },
  {
    id: 'sample-2',
    name: '数据看板',
    description:
      '将业务指标可视化为可交互图表，支持筛选与时间维度切换（示例文案）。',
    stack: ['React', 'D3.js', 'REST'],
    imageUrl: 'https://placehold.co/800x480/0f0f12/22d3ee?text=Dashboard',
    href: '#',
  },
  {
    id: 'sample-3',
    name: 'CLI 工具链',
    description:
      'Node 命令行工具，用于脚手架与代码生成，带单元测试与 CI（示例文案）。',
    stack: ['Node.js', 'TypeScript'],
    imageUrl: 'https://placehold.co/800x480/0f0f12/f472b6?text=CLI',
    href: '#',
  },
]
