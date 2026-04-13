/** 顶部导航：站点内锚点跳转，移动端可后续扩展为抽屉菜单 */
export function Header() {
  const links = [
    { href: '#hero', label: '首页' },
    { href: '#about', label: '关于' },
    { href: '#projects', label: '项目' },
    { href: '#contact', label: '联系' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-border/80 bg-portfolio-bg/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="主导航"
      >
        <a
          href="#hero"
          className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent"
        >
          Portfolio
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1 text-sm sm:gap-4 sm:text-base">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-md px-2 py-1 text-portfolio-muted transition-colors hover:text-portfolio-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
