/** 首页首屏：大标题、简介与头像占位（可替换为真实头像资源） */
export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28"
    >
      <div
        className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-dashed border-portfolio-border bg-neutral-900 sm:h-32 sm:w-32"
        role="img"
        aria-label="头像占位"
      />
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            你好，我是开发者
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-portfolio-muted sm:text-lg">
          在这里写一句简短的自我介绍，说明你的方向、经验或热情所在。
        </p>
      </div>
    </section>
  )
}
