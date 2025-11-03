import React, { useState } from 'react'
import { runIntegrity } from '../modules/sentinel/integrityCheck'

export default function Sentinel() {
  const [output, setOutput] = useState<string[]>([])
  const [running, setRunning] = useState(false)

  async function handleHealth() {
    setRunning(true)
    setOutput([])
    for await (const line of runIntegrity()) {
      setOutput(prev => [...prev, line])
    }
    setRunning(false)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Sentinel Integrity Console</h2>
      <p className="text-white/80">Run an end-to-end health check across GhostShift, Obsidian Trust, Foundation Links, and Gateway.</p>
      <button
        onClick={handleHealth}
        disabled={running}
        className="px-4 py-2 rounded bg-trsCyan/20 border border-trsCyan/60 text-trsCyan hover:bg-trsCyan/30 disabled:opacity-50"
      >
        {running ? 'Running…' : 'obsidian health'}
      </button>
      <pre className="bg-black/60 border border-white/10 rounded p-4 overflow-auto text-sm leading-6">
        {output.join('\n') || 'Awaiting command…'}
      </pre>
    </section>
  )
}
