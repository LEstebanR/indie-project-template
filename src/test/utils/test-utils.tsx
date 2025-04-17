import { render } from '@testing-library/react'
import { type ReactElement } from 'react'

// Custom render function
export const renderWithRouter = (ui: ReactElement) => {
  return render(ui)
}
