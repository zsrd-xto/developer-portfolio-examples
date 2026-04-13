export type HeroProps = {
  /** 主标题，支持较长文案；强调部分可用默认整段渐变 */
  title?: string
  /** 简介段落 */
  subtitle?: string
  /** 头像图片地址；不传则显示渐变占位 */
  avatarSrc?: string
  /** 头像替代文本，利于无障碍 */
  avatarAlt?: string
}

/** 首页首屏：大标题、简介与头像；深色背景 + 渐变强调（Tailwind） */
export function Hero({
  title = '你好，我是张三',
  subtitle = '全栈 / 前端开发者，热爱简洁产品与流畅交互。在此写一句自我介绍，说明你的方向、经验或热情所在。',
  avatarSrc,
  avatarAlt = '头像',
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-portfolio-border/80"
    >
      {/* 深色底上的柔光渐变，不抢正文 */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.22),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(34,211,238,0.08),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(217,70,239,0.1),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20 sm:gap-12 sm:px-6 sm:py-28 md:flex-row md:items-center md:gap-14 md:py-32">
        {/* 头像：渐变描边 + 可选图片 */}
        <div className="shrink-0 md:order-2">
          <div className="relative mx-auto w-fit">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-500 to-cyan-400 opacity-80 blur-md"
              aria-hidden
            />
            <div className="relative rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-500 to-cyan-400 p-[3px] shadow-lg shadow-violet-500/20">
              <div className="overflow-hidden rounded-full bg-portfolio-bg">
                {avatarSrc ? (
                  <img
                    src={avatarSrc}
                    alt={avatarAlt}
                    width={160}
                    height={160}
                    className="h-36 w-36 object-cover sm:h-40 sm:w-40"
                  />
                ) : (
                  <div
                    className="flex h-36 w-36 items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950 sm:h-40 sm:w-40"
                    role="img"
                    aria-label={avatarAlt}
                  >
                    <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
                      我
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex-1 text-center md:order-1 md:text-left">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-portfolio-fg sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-white via-violet-100 to-cyan-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-portfolio-muted sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
