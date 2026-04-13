/** 页脚：版权与次要信息 */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-portfolio-border py-8 text-center text-sm text-portfolio-muted">
      <p>© {year} 个人作品集 · 使用 React 与 Tailwind CSS 构建</p>
    </footer>
  )
}
