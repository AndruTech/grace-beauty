import { PlayCircle, ArrowUpRight } from 'lucide-react'

type Course = {
  title: string
  lessons: string
  level: string
  price: string
}

const COURSES: Course[] = [
  { title: 'Everyday Radiance', lessons: '8 lessons', level: 'Beginner', price: '$89' },
  { title: 'Bridal Masterclass', lessons: '14 lessons', level: 'Advanced', price: '$189' },
  { title: 'Editorial Techniques', lessons: '10 lessons', level: 'Intermediate', price: '$149' },
]

export function Courses() {
  return (
    <section id="courses" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Courses */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Online Courses
          </p>
          <h2 className="mb-10 font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Learn the craft, at your own pace.
          </h2>

          <div className="divide-y divide-border border-y border-border">
            {COURSES.map((course) => (
              <a
                key={course.title}
                href="#"
                className="group flex items-center justify-between gap-4 py-6 transition-colors hover:bg-secondary"
              >
                <div className="pl-1">
                  <h3 className="font-serif text-2xl text-foreground">{course.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {course.lessons} &middot; {course.level}
                  </p>
                </div>
                <div className="flex items-center gap-4 pr-1">
                  <span className="font-serif text-xl text-foreground">{course.price}</span>
                  <ArrowUpRight className="size-5 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            YouTube Channel
          </p>
          <h2 className="mb-10 font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Free tutorials, every week.
          </h2>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video w-full overflow-hidden border border-border"
          >
            <img
              src="/images/portfolio-editorial.png"
              alt="Grace Beauty by Tat YouTube tutorial preview"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/25 transition-colors group-hover:bg-foreground/35">
              <PlayCircle className="size-16 text-background" strokeWidth={1} />
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground underline-offset-4 hover:underline"
          >
            Subscribe on YouTube <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
