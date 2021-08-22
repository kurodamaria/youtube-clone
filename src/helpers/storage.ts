// localStorage operation helpers
// Note the UI won't react to these operations
// see hooks

export const SUBSCRIPTION_KEY = 'subscriptions'
export const WATCH_LATER_KEY = 'watch_later'
export const HISTORY_KEY = 'history'

export declare type KeyT = 'subscriptions' | 'watch_later' | 'history';

export function has(key: KeyT , id: string): boolean {
  const item = localStorage.getItem(key)
  if (item) {
    return item.includes(id)
  }
  return false
}

export function add(key: KeyT, id: string): void {
  const item = localStorage.getItem(key)
  if (item && !has(key, id)) {
    localStorage.setItem(key, item + ' ' + id)
  } else {
    // so that every id can be identified by ` ${id}`
    localStorage.setItem(key, ' ' + id)
  }
}

export function remove(key: KeyT, id: string): boolean {
  const item = localStorage.getItem(key)
  if (item && has(key, id)) {
    localStorage.setItem(key, item.replace(` ${id}`, ''))
  }
  return false
}

export function getAll(key: KeyT): string[] {
  const item = localStorage.getItem(key)
  if (item) {
    return item.split(' ').splice(1)
  }
  return []
}

export function clear(key: KeyT): boolean {
  const item = localStorage.getItem(key)
  if (item) {
    localStorage.removeItem(key)
    return true
  }
  return false
}