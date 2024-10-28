import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  query: z.string().min(1, 'Must have at least 1 char.'),
})

type Schema = z.infer<typeof schema>

export default function SearchInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = (data: Schema) => {
    alert(data.query)
    setIsLoading(true)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex gap-x-2'>
      <Input
        {...register('query')}
        className='w-72'
        size='lg'
        type='text'
        placeholder='Paste a link or search for a video'
        isInvalid={Boolean(errors.query?.message)}
        errorMessage={errors.query?.message}
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
