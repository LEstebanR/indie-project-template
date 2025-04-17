import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { Logo } from '@components/ui/logo'
import { renderWithRouter } from '../../utils/test-utils'
import { vi } from 'vitest'

// Mock the router
vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router')
  return {
    ...actual,
    Link: ({
      children,
      to,
      ...props
    }: {
      children: React.ReactNode
      to: string
    }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  }
})

describe('Logo', () => {
  it('renders the logo with correct text and icon', () => {
    renderWithRouter(<Logo />)

    // Verificar que el texto esté presente
    const logoText = screen.getByRole('link', { name: /indie project/i })
    expect(logoText).toBeInTheDocument()

    // Verificar que el icono esté presente
    const icon = screen.getByTestId('tree-palm-icon')
    expect(icon).toBeInTheDocument()

    // Verificar que el enlace apunte a la página principal
    expect(logoText).toHaveAttribute('href', '/')
  })
})
