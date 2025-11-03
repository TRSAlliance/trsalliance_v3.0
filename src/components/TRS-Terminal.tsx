import React, { useState } from 'react'

export default function TRSTerminal() {
  const [lines, setLines] = useState<string[]>([
    'TRS OBSIDIAN v3.0 — Terminal',
    'Type `obsidian boot` or `obsidian health`'
  ])
  const [cmd, setCmd] = useState('')

  function push(s: string) {
    setLines(prev => [...prev, s])
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const c = cmd.trim()
    if (!c) return
    push('> ' + c)
    if (c === 'obsidian boot') {
      push('[✓] GhostShift Engine       → Ready')
      push('[✓] Obsidian Trust Core     → Online (98/100)')
      push('[✓] TRS Foundation Chain    → Self-healed links detected')
      push('[✓] Sentinel CLI            → Monitoring')
      push('[✓] FireHouse Gateway       → Secure')
      push('SYSTEM: ALIVE • TRUTH: VERIFIED • RESILIENCE: ACTIVE')
    } else if (c === 'obsidian health') {
      push('Running system-wide integrity check…')
      setTimeout(()=>push('OK • All subsystems nominal'), 500)
    } else {
      push('Unknown command')
    }
    setCmd('')
  }

  return (
    <div className="rounded-lg border border-white/10 bg-black/60 p-4">
      <pre className="text-sm leading-6 min-h-[220px]">{lines.join('\n')}</pre>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          value={cmd}
          onChange={e=>setCmd(e.target.value)}
          className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-2 outline-none focus:border-trsCyan/60"
          placeholder="obsidian boot"
        />
        <button className="px-3 py-2 rounded bg-trsCyan/20 border border-trsCyan/60 text-trsCyan hover:bg-trsCyan/30">
          Run
        </button>
      </form>
    </div>
  )
}
