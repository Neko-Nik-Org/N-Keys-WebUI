import { atomWithStorage } from 'jotai/utils'

export const userAtom = atomWithStorage<any>('n-keys-user', null)
export const csrfTokenAtom = atomWithStorage<string | null>('n-keys-csrf-token', null)
