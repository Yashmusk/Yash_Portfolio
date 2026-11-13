import { useState, type ReactNode } from 'react'

function Phone({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="mx-auto w-full max-w-[290px]">
      <div className="rounded-[2rem] border border-ink/15 bg-card p-2.5 shadow-[0_20px_50px_-30px_rgba(23,24,27,.5)]">
        <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-ink/10" aria-hidden />
        <div className="min-h-[420px] rounded-[1.5rem] bg-paper p-3.5 font-sans text-[12px] text-ink">{children}</div>
      </div>
      <p className="mt-3 text-center font-mono text-[10.5px] uppercase tracking-wider text-muted">{label}</p>
    </div>
  )
}

const Bar = ({ w = 'w-full', h = 'h-2' }: { w?: string; h?: string }) => <div className={`${w} ${h} rounded bg-ink/10`} aria-hidden />
const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

/* ─────────────────────── Sahi: interactive pre-trade snapshot */
function SahiWire() {
  const capital = 50000
  const weeklyLimit = 2500
  const usedSoFar = 1000
  const entry = 1250
  const sl = 1225
  const target = 1300
  const [qty, setQty] = useState(20)
  const loss = (entry - sl) * qty
  const gain = (target - entry) * qty
  const pct = (loss / capital) * 100
  const left = weeklyLimit - usedSoFar - loss
  const over = left < 0
  const usedPct = Math.min(100, ((usedSoFar + loss) / weeklyLimit) * 100)

  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      <Phone label="Weekly plan">
        <p className="font-medium">This week’s plan</p>
        <p className="text-[10.5px] text-muted">Set by you · editable anytime</p>
        <div className="mt-3 space-y-2 rounded-xl border border-line bg-card p-3">
          {[
            ['Capital', inr(capital)],
            ['Max weekly loss', inr(weeklyLimit)],
            ['Max trades / day', '4'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between"><span className="text-muted">{k}</span><span className="font-mono">{v}</span></div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-line bg-card p-3">
          <div className="flex justify-between"><span className="text-muted">Risk budget used</span><span className="font-mono">{inr(usedSoFar)}</span></div>
          <div className="mt-2 h-2 rounded-full bg-ink/10"><div className="h-2 rounded-full bg-accent" style={{ width: `${(usedSoFar / weeklyLimit) * 100}%` }} /></div>
          <div className="mt-3 flex justify-between"><span className="text-muted">Trades today</span><span className="font-mono">2 / 4</span></div>
        </div>
        <div className="mt-4 space-y-2"><Bar /><Bar w="w-2/3" /><Bar w="w-5/6" /></div>
      </Phone>

      <div>
        <Phone label="Order screen + risk snapshot">
          <div className="flex justify-between"><span className="font-medium">BUY · DEMO-STOCK</span><span className="font-mono">{inr(entry)}</span></div>
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
            {[['Qty', String(qty)], ['Stop-loss', inr(sl)], ['Target', inr(target)]].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-line bg-card py-1.5"><p className="text-[9.5px] text-muted">{k}</p><p className="font-mono">{v}</p></div>
            ))}
          </div>
          <div className={`mt-3 rounded-xl border p-3 transition-colors ${over ? 'border-warn/40 bg-warn-soft' : 'border-accent/25 bg-accent-soft/60'}`}>
            <p className="font-medium">Before you place this</p>
            <div className="mt-2 space-y-1.5">
              <div className="flex justify-between"><span>Loss if stop-loss hits</span><span className="font-mono">{inr(loss)}</span></div>
              <div className="flex justify-between"><span>% of capital</span><span className="font-mono">{pct.toFixed(1)}%</span></div>
              <div className="flex justify-between"><span>Risk : reward</span><span className="font-mono">1 : {(gain / loss).toFixed(1)}</span></div>
              <div className="flex justify-between"><span>Weekly budget left after</span><span className={`font-mono ${over ? 'text-warn' : 'text-gain'}`}>{over ? 'Over by ' + inr(-left) : inr(left)}</span></div>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-ink/10"><div className={`h-1.5 rounded-full ${over ? 'bg-warn' : 'bg-accent'}`} style={{ width: `${usedPct}%` }} /></div>
            {over && <p className="mt-2 text-[10.5px] text-warn">This trade exceeds the weekly limit you set. You can still continue.</p>}
          </div>
          <div className="mt-4 rounded-full bg-ink py-2.5 text-center font-medium text-paper">Swipe to buy</div>
        </Phone>
        <div className="mx-auto mt-5 max-w-[290px]">
          <label htmlFor="qty" className="eyebrow flex justify-between"><span>Try it · quantity</span><span className="font-mono text-ink">{qty}</span></label>
          <input id="qty" type="range" min={5} max={80} step={5} value={qty} onChange={(e) => setQty(+e.target.value)} className="mt-2 w-full accent-[#2B4BD8]" />
          <p className="mt-1 text-[11px] text-muted">Illustrative numbers only — a dummy stock, not real market data.</p>
        </div>
      </div>
    </div>
  )
}

export default function Wireframe({ id }: { id: 'sahi' }) {
  return id === 'sahi' ? <SahiWire /> : null
}
