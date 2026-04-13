import { skills } from '../data/skills'

/** 关于我：详细介绍与技能列表，数据来自 `data/skills.ts` */
export function About() {
  return (
    <section
      id="about"
      className="border-t border-portfolio-border bg-neutral-950/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            关于我
          </span>
        </h2>
        <p className="mb-10 max-w-3xl text-portfolio-muted leading-relaxed">
          在此撰写更详细的经历、技术偏好与目标。保持段落简洁，便于阅读。
        </p>
        <h3 className="mb-4 text-lg font-medium text-portfolio-fg">技能</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-portfolio-border bg-portfolio-bg px-3 py-1 text-sm text-portfolio-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
