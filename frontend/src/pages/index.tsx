import Disclaimer from '@/components/disclaimer'
import { GithubIcon } from '@/components/icons'
import OptionsWrapper from '@/components/options-wrapper'
import { subtitle, title } from '@/components/primitives'
import SearchInput from '@/components/search-input'
import { siteConfig } from '@/config/site'
import DefaultLayout from '@/layouts/default'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <span className={title()}>Download&nbsp;</span>
          <span className={title({ color: 'pink' })}>YouTube&nbsp;</span>
          <br />
          <span className={title()}>Media in Seconds</span>
          <div className={subtitle({ class: 'mt-4' })}>
            Enjoy fast, reliable downloads of videos, audio, and playlists in
            just a few clicks
          </div>
        </div>

        <div className='flex gap-3'>
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={siteConfig.links.docs}
          >
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
            Linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: 'bordered', radius: 'full' })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <SearchInput className='w-full lg:w-2/5 mt-8' />
        <QueryClientProvider client={queryClient}>
          <OptionsWrapper />
        </QueryClientProvider>
        <Disclaimer />
      </section>
    </DefaultLayout>
  )
}
