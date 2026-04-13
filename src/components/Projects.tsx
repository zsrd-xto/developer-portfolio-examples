import type { Project } from '../data/projects'
import { projects as defaultProjects } from '../data/projects'

export type ProjectsProps = {
  /** 项目列表；默认使用 `data/projects.ts` */
  items?: Project[]
  /** 区块主标题 */
  heading?: string
}

/**
 * 项目展示：网格卡片列表。
 * 每张卡片包含：截图、标题、描述、技术栈标签；图片懒加载。
 */
export function Projects({
  items = defaultProjects,
  heading = '项目',
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="border-t border-portfolio-border/80 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>
        <p className="mb-10 max-w-2xl text-sm text-portfolio-muted sm:text-base">
          每个项目包含截图、标题、简介与技术栈；点击卡片或标题可打开项目链接。
        </p>

        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-portfolio-border bg-neutral-950/40 py-12 text-center text-portfolio-muted">
            暂无项目，请在 <code className="text-violet-300">src/data/projects.ts</code>{' '}
            中添加数据。
          </p>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-2">
            {items.map((project) => (
              <li key={project.id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-portfolio-border bg-neutral-950/60 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-violet-500/35 hover:shadow-lg hover:shadow-violet-500/5">
                  {/* 截图 */}
                  <a
                    href={project.href}
                    className="relative block aspect-[5/3] w-full overflow-hidden bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.name}（打开链接）`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={`${project.name} 截图`}
                      width={800}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-portfolio-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    {/* 标题 */}
                    <h3 className="text-lg font-semibold leading-snug">
                      <a
                        href={project.href}
                        className="rounded-sm text-portfolio-fg transition-colors hover:bg-gradient-to-r hover:from-violet-300 hover:to-cyan-300 hover:bg-clip-text hover:text-transparent"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {project.name}
                      </a>
                    </h3>

                    {/* 描述 */}
                    <p className="flex-1 text-sm leading-relaxed text-portfolio-muted">
                      {project.description}
                    </p>

                    {/* 技术栈标签 */}
                    <ul className="flex flex-wrap gap-2 pt-1" aria-label="技术栈">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <span className="inline-block rounded-md border border-violet-500/25 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 px-2.5 py-1 text-xs font-medium text-violet-200/95">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
