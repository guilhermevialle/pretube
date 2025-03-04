import { Link } from '@nextui-org/link'
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar'

import { DiscordIcon, GithubIcon, Logo, TwitterIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import { siteConfig } from '@/config/site'

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <Link
            className='flex justify-start items-center gap-1'
            color='foreground'
            href='/'
          >
            <Logo />
            <p className='font-bold text-inherit'>Pretuber</p>
          </Link>
        </NavbarBrand>
        <div className='hidden lg:flex gap-4 justify-start ml-2'></div>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link isExternal href={siteConfig.links.twitter} title='Twitter'>
            <TwitterIcon className='text-default-500' />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title='Discord'>
            <DiscordIcon className='text-default-500' />
          </Link>
          <Link isExternal href={siteConfig.links.github} title='GitHub'>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
