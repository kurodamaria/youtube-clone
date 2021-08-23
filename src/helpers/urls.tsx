export const API_KEY = 'AIzaSyBUhZ2UBHtNmslXzTUBbLbzvRAjMPfiEjA'

const BASE_URL = 'https://www.googleapis.com/youtube/v3/'
const KEY_PARAM = paramReducer('key', [API_KEY])

export function paramReducer(key: string, args: string[]): string {
  return '&' + key + '=' + args.join(',')
}

type CategoryT = 'videos' | 'channels' | 'search'

export function category(category: CategoryT): string {
  return BASE_URL + category + '?' + KEY_PARAM
}