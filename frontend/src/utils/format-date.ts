import { formatDistanceToNow, parse } from 'date-fns'

export function formatDate(dateString: string): string {
  try {
    const date = parse(dateString, 'yyyyMMdd', new Date())
    return formatDistanceToNow(date, { addSuffix: true })
  } catch (error) {
    console.error('Invalid date format:', error)
    return ''
  }
}
