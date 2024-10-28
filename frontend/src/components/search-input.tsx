import { videoInfoAtom } from '@/contexts/video-info'
import { getVideoByLink } from '@/services/api'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { useAtom } from 'jotai'
import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

const schema = z.object({
  query: z.string().min(1, 'Must have at least 1 char.'),
})

type Schema = z.infer<typeof schema>

interface SearchInputProps extends HTMLAttributes<HTMLFormElement> {}

export default function SearchInput({ ...props }: SearchInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [, setVideoInfo] = useAtom(videoInfoAtom)

  const onSubmit = async (data: Schema) => {
    const { query } = data

    if (query) {
      setIsLoading(true)
      const data = await getVideoByLink(query)
      setIsLoading(false)
      setVideoInfo(data)
    }
  }

  return (
    <form
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge('w-full flex gap-x-2 flex-shrink-0', props.className)}
    >
      <Input
        {...register('query')}
        className='w-full flex-auto'
        size='lg'
        type='text'
        placeholder='Paste a link or search for a video'
        isInvalid={Boolean(errors.query?.message)}
        errorMessage={errors.query?.message}
        autoComplete='off'
      />

      <Button
        type='submit'
        className='h-12 rounded-2xl'
        size='sm'
        color='primary'
        variant='flat'
        disabled={isLoading}
        isLoading={isLoading}
      >
        {!isLoading && <FontAwesomeIcon icon={faSearch} size='xl' />}
      </Button>
    </form>
  )
}
