import { CustomLink } from '@components/ui/link'
import { Logo } from '@components/ui/logo'
import { Button } from './button'
import { DropDown } from '@components/ui/dropdown'
import { Menu } from 'lucide-react'
import { LanguageToggle } from './language-toggle'

const HEADER_LINKS = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Home',
    href: '/',
  },
]

type HeaderLink = {
  label: string
  href: string
}

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-18 items-center justify-center border-b-2 border-gray-100 bg-white backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-4 xl:w-5/6 xl:px-0">
        <Logo />
        <div className="hidden items-center gap-4 md:flex">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <CustomLink href={link.href} key={link.label} type="text">
              {link.label}
            </CustomLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="link" href="/login">
            LogIn
          </Button>
          <Button type="link" href="/signup">
            SignUp
          </Button>
          <LanguageToggle />
          <DropDown
            className="md:hidden"
            options={HEADER_LINKS}
            type="icon"
            icon={<Menu />}
            action={() => {}}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
