import { ArrowDown } from 'lucide-react'

/** Simple layered architecture diagram: each row is a layer, each string a node. */
export default function ArchDiagram({ layers }: { layers: string[][] }) {
  return (
    <figure className="rounded-xl border border-line bg-paper bg-grid p-4" aria-label="Architecture diagram">
      <div className="flex flex-col items-stretch gap-1.5">
        {layers.map((row, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div className="flex w-full flex-wrap justify-center gap-2">
              {row.map((n) => (
                <span
                  key={n}
                  className={`rounded-md border px-3 py-1.5 text-center font-mono text-xs ${
                    i === 0 ? 'border-accent/30 bg-accent-soft text-accent-deep' : 'border-line bg-card text-ink-soft'
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
            {i < layers.length - 1 && <ArrowDown size={14} className="text-muted" aria-hidden />}
          </div>
        ))}
      </div>
    </figure>
  )
}
