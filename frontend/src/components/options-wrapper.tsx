import { videoInfoAtom } from '@/contexts/video-info'
import { getVideoFormats } from '@/services/api'
import { faMusic, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import AudioFormatsTable from './audio-formats-table'
import VideoCard from './video-card'
import VideoFormatsTable from './video-formats-table'

export default function OptionsWrapper() {
  const [video] = useAtom(videoInfoAtom)

  const { data: formats } = useQuery({
    queryKey: ['videoFormats', video?.link],
    queryFn: () => getVideoFormats(video?.link),
    enabled: !!video,
    retry: false,
    refetchOnWindowFocus: false,
  })

  if (!video) return null

  return (
    <div className='w-full lg:w-4/5 mt-6 flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:h-[400px]'>
      <div className='w-full lg:w-1/2'>
        <VideoCard video={video} />
      </div>

      <div className='w-full lg:w-1/2 overflow-y-auto max-h-[400px]'>
        <Tabs
          className='w-full bg-white dark:bg-black sticky top-0 z-20'
          aria-label='Options'
          color='primary'
          variant='bordered'
        >
          <Tab
            key='audio'
            title={
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faMusic} />
                <span>Only audio</span>
              </div>
            }
          >
            {formats && formats.audio && (
              <AudioFormatsTable audioFormats={formats.audio} />
            )}
          </Tab>

          <Tab
            key='video'
            title={
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faVideo} />
                <span>Only video</span>
              </div>
            }
          >
            {formats && formats.video && (
              <VideoFormatsTable videoFormats={formats.video} />
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
