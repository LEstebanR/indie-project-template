import { Button } from '@components/ui/button'
import { Body, H1, H2 } from '@components/ui/typography'
import { Chip } from '@components/ui/chip'

export function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-start gap-2 md:w-3/6">
        <H1>Indie project template</H1>
        <H2>Typography:</H2>
        <H1>H1</H1>
        <H2>H2</H2>
        <Body>Body</Body>
        <H2>Button:</H2>
        <div className="flex flex-row flex-wrap gap-2">
          <Button>Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button color="secondary">Solid</Button>
          <Button color="secondary" variant="outline">
            Outline
          </Button>
        </div>
        <H2>Chip:</H2>
        <div className="flex flex-row flex-wrap gap-2">
          <Chip>Chip</Chip>
          <Chip color="secondary">Chip</Chip>
        </div>
      </div>
    </div>
  )
}
