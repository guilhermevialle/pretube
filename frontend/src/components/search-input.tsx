import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { useState } from 'react'

export default function SearchInput() {
  const [query, setQuery] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
    } catch (error) {}

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex gap-x-4'>
      <Input
        onChange={(e) => setQuery(e.target.value)}
        className='w-72'
        size='lg'
        value={query}
        type='text'
        placeholder='Copy and paste some link or search...'
      />

      <Button
        type='submit'
        className='h-12 rounded-2xl'
        size='sm'
        color='primary'
        disabled={isLoading}
        isLoading={isLoading}
      >
        {!isLoading && <FontAwesomeIcon icon={faSearch} size='lg' />}
      </Button>
    </form>
  )
}
