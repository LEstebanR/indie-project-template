import { ReactNode } from 'react'
import clsx from 'clsx'

type ChipProps = {
  children: ReactNode
  className?: string
  color?: string
}

export function Chip({ children, className, color = 'primary' }: ChipProps) {
  return (
    <div
      className={clsx('w-max rounded-full px-4 py-2', `bg-${color}`, className)}
    >
      {children}
    </div>
  )
}
