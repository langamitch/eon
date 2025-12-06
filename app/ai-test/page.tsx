"use client"

import React, { useState } from 'react'

const providers = ['openai', 'anthropic', 'xai', 'gemini']

export default function AITest() {
  const [prompt, setPrompt] = useState('Say hello from provider:')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function callProvider(provider: string) {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`/api/${provider}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const json = await res.json()
      setResult(json.text ?? json.error ?? JSON.stringify(json))
    } catch (err) {
      setResult(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-2xl font-semibold">AI Providers test</h1>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full rounded border p-2" rows={4} />

        <div className="mt-4 flex gap-2">
          {providers.map((p) => (
            <button key={p} onClick={() => callProvider(p)} className="rounded bg-blue-600 px-3 py-2 text-white">
              {loading ? '...' : `Call ${p}`}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded border p-4">
          <h2 className="mb-2 text-lg font-medium">Result</h2>
          <pre className="whitespace-pre-wrap">{result ?? '—'}</pre>
        </div>
      </div>
    </main>
  )
}
