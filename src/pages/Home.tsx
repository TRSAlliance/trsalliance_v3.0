import React from 'react'
import TRSTerminal from '../components/TRS-Terminal'

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">System Overview</h2>
        <p className="text-white/80">
          Obsidian Smart OS v3.0 is a layered, self-healing operating system for truth-verified operations.
          Use the Sentinel console to run integrity checks, and launch the GhostShift simulator to visualize live scenarios.
        </p>
        <ul className="text-sm text-white/70 list-disc ml-5 space-y-1">
          <li>Governance: Obsidian Trust Core</li>
          <li>Simulation: GhostShift Engine</li>
          <li>Resilience: Sentinel + Foundation</li>
        </ul>
      </div>
      <TRSTerminal/>
    </section>
  )
}
