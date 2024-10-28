export function formatUnit(
  bytes: number,
  unit: 'bytes' | 'kbytes' | 'megabytes' | 'gigabytes' | 'auto' = 'auto'
): string {
  let formattedSize: string
  let currentUnit: string

  switch (unit) {
    case 'bytes':
      formattedSize = bytes.toFixed(0)
      currentUnit = 'Bytes'
      break
    case 'kbytes':
      formattedSize = (bytes / 1024).toFixed(2)
      currentUnit = 'KB'
      break
    case 'megabytes':
      formattedSize = (bytes / 1024 ** 2).toFixed(2)
      currentUnit = 'MB'
      break
    case 'gigabytes':
      formattedSize = (bytes / 1024 ** 3).toFixed(2)
      currentUnit = 'GB'
      break
    case 'auto':
      if (bytes >= 1024 ** 3) {
        formattedSize = (bytes / 1024 ** 3).toFixed(2)
        currentUnit = 'GB'
      } else if (bytes >= 1024 ** 2) {
        formattedSize = (bytes / 1024 ** 2).toFixed(2)
        currentUnit = 'MB'
      } else if (bytes >= 1024) {
        formattedSize = (bytes / 1024).toFixed(2)
        currentUnit = 'KB'
      } else {
        formattedSize = bytes.toFixed(0)
        currentUnit = 'Bytes'
      }
      break
    default:
      throw new Error('Invalid unit')
  }

  return `${formattedSize.replace('.', ',')} ${currentUnit}`
}
