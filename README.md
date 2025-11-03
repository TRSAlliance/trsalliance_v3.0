# TRS Alliance v3.0 — Obsidian Smart OS UI

This is a deployable React + TypeScript + Vite + Tailwind frontend that exposes:
- **Sentinel Console** (integrity check + system status)
- **GhostShift Simulator** (entry stub + dashboard)
- **TRS Terminal** (command-style UI for `obsidian boot` / `obsidian health` demos)

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy (Netlify)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions`
