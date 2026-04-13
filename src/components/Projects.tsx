import { projects } from '../data/projects'

/** 项目展示：卡片列表，数据来自 `data/projects.ts`；图片使用原生 loading 懒加载 */
export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
            项目
          </span>
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-portfolio-border bg-neutral-950/50 shadow-sm transition-shadow hover:shadow-violet-500/10">
                <a
                  href={project.href}
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={project.imageUrl}
                    alt=""
                    width={600}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[5/3] w-full object-cover"
                  />
                </a>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold text-portfolio-fg">
                    <a
                      href={project.href}
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="flex-1 text-sm text-portfolio-muted leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label="技术栈">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-violet-500/15 px-2 py-0.5 text-xs text-violet-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
