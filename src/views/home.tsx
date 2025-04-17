import { CustomLink } from '@components/ui/link'

export function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-primary">Hello world!!</p>
      <CustomLink href="/about">About</CustomLink>
    </div>
  )
}
