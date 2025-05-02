import { ReactNode } from 'react'
import clsx from 'clsx'

type ChipProps = {
  children: ReactNode
  className?: string
  color?: string
  textColor?: string
}

export function Chip({
  children,
  className,
  color = 'primary',
  textColor = 'white',
}: ChipProps) {
  return (
    <div
      className={clsx(
        'flex h-8 w-max items-center justify-center rounded-full px-4',
        `bg-${color}`,
        `text-${textColor}`,
        className
      )}
    >
      {children}
    </div>
  )
}
