import { NextResponse } from 'next/server'
import { geminiChat } from '@/lib/ai'

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    if (!prompt) return NextResponse.json({ error: 'Missing prompt' }, { status: 400 })
    const text = await geminiChat(prompt)
    return NextResponse.json({ text })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? String(err) }, { status: 500 })
  }
}
