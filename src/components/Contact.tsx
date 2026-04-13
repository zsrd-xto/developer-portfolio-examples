/** 联系方式：邮箱与社交链接占位，请替换为真实地址并保证可点击 */
export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-portfolio-border bg-neutral-950/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            联系
          </span>
        </h2>
        <ul className="flex flex-col gap-4 text-portfolio-muted sm:flex-row sm:flex-wrap sm:gap-8">
          <li>
            <span className="mr-2 text-portfolio-fg">邮箱</span>
            <a
              href="mailto:you@example.com"
              className="text-violet-300 underline-offset-4 hover:underline"
            >
              you@example.com
            </a>
          </li>
          <li>
            <span className="mr-2 text-portfolio-fg">GitHub</span>
            <a
              href="https://github.com/"
              className="text-violet-300 underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              github.com/yourname
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
