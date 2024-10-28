import { formatDate } from '@/utils/format-date'
import { formatDuration } from '@/utils/format-duration'

interface VideoCardProps {
  video: VideoInfo
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    video && (
      <div className='w-full h-96 rounded-lg border overflow-hidden dark:border-zinc-800 shadow-xl'>
        <div className='w-full h-3/5 relative'>
          <span className='block absolute z-10 bg-black/85 backdrop-blur-md text-sm px-1 py-0.5 right-3 bottom-3 text-white rounded-md font-medium'>
            {formatDuration(video.duration)}
          </span>

          <img src={video.thumbnail} className='object-cover w-full h-full' />
        </div>

        <div className='w-full h-2/5 flex flex-col gap-y-1.5 p-5 bg-zinc-50 dark:bg-zinc-950'>
          <p className='leading-7 font-semibold text-lg text-zinc-700 dark:text-zinc-200 max-h-16 line-clamp-2'>
            {video.title}
          </p>

          <div className='text-zinc-500 font-medium dark:text-zinc-400 flex justify-center flex-col w-full'>
            <span>{video.author}</span>

            <div className='font-normal'>
              <span>{video.views.toLocaleString()} views</span>
              <span>&nbsp;·&nbsp;</span>
              <span>{formatDate(video.publish_date)}</span>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
