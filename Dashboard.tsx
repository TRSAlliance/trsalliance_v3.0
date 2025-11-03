import React from 'react'

export default function Dashboard() {
  const metrics = [
    { k: 'GhostShift Engine', v: 'Running', ok: true },
    { k: 'Obsidian Trust Score', v: '98/100', ok: true },
    { k: 'Foundation Links', v: 'Self-healed: 3', ok: true },
    { k: 'Sentinel CLI', v: 'Active', ok: true },
    { k: 'FireHouse Gateway', v: 'Secure', ok: true },
  ]
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">System Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map(m => (
          <div key={m.k} className="rounded-lg border border-white/10 p-4 bg-black/40">
            <div className="text-white/60 text-xs">{m.k}</div>
            <div className={`mt-2 text-lg ${m.ok ? 'text-trsCyan' : 'text-red-400'}`}>{m.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
