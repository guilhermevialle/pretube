import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9090',
})

export const getVideoByLink = async (
  link: string
): Promise<VideoInfo | null> => {
  try {
    const { data } = await api.post('/get-video', {
      link,
    })

    if (!data) return null

    return data
  } catch (error) {
    return null
  }
}

export const getVideoFormats = async (
  link: string | undefined
): Promise<Formats | null> => {
  try {
    const { data } = await api.post(`/get-video-formats`, {
      link,
    })

    if (!data) return null

    return data
  } catch (error) {
    return null
  }
}
