/** 单个项目卡片所需字段（与 PRD 项目展示一致） */
export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  imageUrl: string
  href: string
}

/** 项目数据：使用占位内容，后续替换为真实项目与截图 */
export const projects: Project[] = [
  {
    id: 'sample-1',
    name: '示例项目',
    description: '在此填写项目简介，可配合截图与外链展示。',
    stack: ['React', 'TypeScript'],
    imageUrl: 'https://placehold.co/600x360/171717/737373?text=Project',
    href: '#',
  },
]
