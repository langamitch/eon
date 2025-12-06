import { NextResponse } from 'next/server';
import clients, {
  requireOpenAI,
  requireAnthropic,
  xaiKeyOrThrow,
  googleKeyOrThrow,
} from './aiClients';

export async function openaiChat(prompt: string) {
  const openai = requireOpenAI();
  const resp = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  // The shape varies by SDK version; try sensible fallbacks
  const text =
    resp.output?.[0]?.content?.[0]?.text ?? resp.output ?? JSON.stringify(resp);
  return String(text);
}

export async function anthropicChat(prompt: string) {
  const anthropic = requireAnthropic();
  const resp = await anthropic.completions.create({
    model: 'claude-2.1',
    prompt,
    max_tokens: 512,
  });
  return String(resp?.completion ?? '');
}

export async function xaiChat(prompt: string) {
  const key = xaiKeyOrThrow();
  const res = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'x1',
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  const json = await res.json();
  return String(json?.choices?.[0]?.message?.content ?? JSON.stringify(json));
}

export async function geminiChat(prompt: string) {
  const key = googleKeyOrThrow();
  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ prompt: { text: prompt }, maxOutputTokens: 512 }),
    }
  );
  const json = await res.json();
  return String(json?.candidates?.[0]?.content ?? JSON.stringify(json));
}

export default { openaiChat, anthropicChat, xaiChat, geminiChat };
