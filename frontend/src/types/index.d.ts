type VideoInfo = {
  link: string
  author: string
  description: string
  duration: number
  publish_date: string
  title: string
  views: number
  thumbnail: string
}

type AudioFormat = {
  bitrate: number
  size: number
  src: string
  type: string
}

type VideoFormat = {
  resolution: string
  size: number
  src: string
  type: string
}

type Formats = {
  audio: AudioFormat[]
  video: VideoFormat[]
}
