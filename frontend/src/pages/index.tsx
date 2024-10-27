import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import { GithubIcon } from '@/components/icons'
import { subtitle, title } from '@/components/primitives'
import SearchInput from '@/components/search-input'
import { siteConfig } from '@/config/site'
import DefaultLayout from '@/layouts/default'

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

        <div className='max-w-lg mt-8'>
          <SearchInput />
        </div>
      </section>
    </DefaultLayout>
  )
}
