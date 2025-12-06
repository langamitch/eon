import supabase from './supabaseClient'

/*
  Common API wrapper functions using Supabase.
  - Auth helpers: signUp, signIn, signOut, getUser
  - Profile CRUD (assumes a `profiles` table)
  - Generic table helpers: fetchRows, insertRow, updateRow, deleteRow
  - Storage helpers: uploadFile, getPublicUrl

  Update table/bucket names as needed for your schema.
*/

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  return { data, error }
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser()
  return { data: data?.user ?? null, error }
}

// Profiles helpers (change `profiles` to your table name)
export async function getProfile(userId: string) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
  return { data, error }
}

export async function upsertProfile(profile: Record<string, any>) {
  const { data, error } = await supabase.from('profiles').upsert(profile).select()
  return { data, error }
}

// Generic table helpers
export async function fetchRows(table: string, columns = '*', filters: Record<string, any> | null = null) {
  let query = supabase.from(table).select(columns)
  if (filters) {
    for (const [k, v] of Object.entries(filters)) {
      query = query.eq(k, v as any)
    }
  }
  const { data, error } = await query
  return { data, error }
}

export async function insertRow(table: string, row: Record<string, any>) {
  const { data, error } = await supabase.from(table).insert(row).select()
  return { data, error }
}

export async function updateRow(table: string, idField: string, idValue: any, patch: Record<string, any>) {
  const { data, error } = await supabase.from(table).update(patch).eq(idField, idValue).select()
  return { data, error }
}

export async function deleteRow(table: string, idField: string, idValue: any) {
  const { data, error } = await supabase.from(table).delete().eq(idField, idValue).select()
  return { data, error }
}

// Storage helpers
export async function uploadFile(bucket: string, path: string, file: Blob | File | Buffer) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, file)
  return { data, error }
}

export function getPublicUrl(bucket: string, path: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data
}

export default {
  signUpWithEmail,
  signInWithEmail,
  signOut,
  getUser,
  getProfile,
  upsertProfile,
  fetchRows,
  insertRow,
  updateRow,
  deleteRow,
  uploadFile,
  getPublicUrl,
}
