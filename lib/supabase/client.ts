import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    "https://cvovjhsjkfbhvqjquwxh.supabase.co",
    "sb_publishable_yPAxIjXq8FNVmnx--JolZw_-UE2hzX2",
  )
}
