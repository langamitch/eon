import OpenAI from 'openai'
import { Anthropic } from '@anthropic-ai/sdk'
// xAI and Google clients may be simple REST wrappers; import SDKs if available

const openaiKey = process.env.OPENAI_API_KEY
const anthropicKey = process.env.ANTHROPIC_API_KEY
const xaiKey = process.env.XAI_API_KEY
const googleKey = process.env.GOOGLE_API_KEY

export const openaiClient = openaiKey ? new OpenAI({ apiKey: openaiKey }) : null
export const anthropicClient = anthropicKey ? new Anthropic({ apiKey: anthropicKey }) : null

if (!openaiClient) {
  console.warn('OpenAI API key not configured (OPENAI_API_KEY)')
}
if (!anthropicClient) {
  console.warn('Anthropic API key not configured (ANTHROPIC_API_KEY)')
}

export function requireOpenAI() {
  if (!openaiClient) throw new Error('Missing OPENAI_API_KEY')
  return openaiClient
}

export function requireAnthropic() {
  if (!anthropicClient) throw new Error('Missing ANTHROPIC_API_KEY')
  return anthropicClient
}

export const xaiKeyOrThrow = () => {
  if (!xaiKey) throw new Error('Missing XAI_API_KEY')
  return xaiKey
}

export const googleKeyOrThrow = () => {
  if (!googleKey) throw new Error('Missing GOOGLE_API_KEY')
  return googleKey
}

export default {
  openaiClient,
  anthropicClient,
  requireOpenAI,
  requireAnthropic,
  xaiKeyOrThrow,
  googleKeyOrThrow,
}
