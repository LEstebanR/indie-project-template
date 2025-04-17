import { createFileRoute } from '@tanstack/react-router'
import { About } from '../views/about'

export const Route = createFileRoute('/about')({
  component: About,
})
