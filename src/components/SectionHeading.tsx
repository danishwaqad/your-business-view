function Dots() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-ink/20" />
      <span className="size-1.5 rounded-full bg-ink" />
      <span className="size-1.5 rounded-full bg-ink" />
      <span className="size-1.5 rounded-full bg-ink" />
      <span className="h-px w-16 bg-ink/20" />
    </div>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  copy?: string
}

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-olive uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl tracking-wide text-green uppercase sm:text-5xl">
        {title}
      </h2>
      <div className="mt-5">
        <Dots />
      </div>
      {copy ? <p className="mt-5 text-muted">{copy}</p> : null}
    </div>
  )
}
