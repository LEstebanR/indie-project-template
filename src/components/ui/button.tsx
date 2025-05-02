import { ReactNode } from 'react'
import clsx from 'clsx'
import { CustomLink } from '@components/ui/link'
import { Loader2 } from 'lucide-react'
interface ButtonProps {
  children?: React.ReactNode
  variant?: 'solid' | 'outline'
  color?: 'primary' | 'secondary' | 'black'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  type?: 'link' | 'icon' | 'submit'
  href?: string
  action?: () => void
  icon?: ReactNode
  isLoading?: boolean
}

const defaultClasses =
  'flex items-center justify-center py-1 px-2 h-8 rounded-md border-1 text-sm hover:opacity-80 hover:shadow-lg transition-all duration-300 cursor-pointer'

const sizeClasses = {
  sm: 'w-12',
  md: 'w-18',
  lg: 'w-48',
  xl: 'w-56',
  full: 'w-full',
}

export function Button({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  type,
  href,
  action,
  icon,
  isLoading = false,
}: ButtonProps) {
  const variantClasses = {
    solid: `bg-${color} text-white border-${color} border-1 border-${color}`,
    outline: `border-gray-300 text-${color} border-1`,
  }

  const colorClasses = {
    primary: {
      solid: 'bg-primary text-white border-primary',
      outline: 'border-primary text-primary',
    },
    secondary: {
      solid: 'bg-secondary text-secondary border-secondary',
      outline: 'border-secondary text-secondary',
    },
    black: {
      solid: 'bg-black text-white',
      outline: '',
    },
  }

  const buttonContent = isLoading ? (
    <Loader2 className="h-4 w-4 animate-spin" />
  ) : (
    children
  )

  if (type == 'link') {
    return (
      <CustomLink href={href || ''}>
        <button
          className={clsx(
            defaultClasses,
            variantClasses[variant],
            sizeClasses[size],
            colorClasses[color][variant],
            isLoading && 'cursor-not-allowed opacity-50'
          )}
        >
          {buttonContent}
        </button>
      </CustomLink>
    )
  }

  if (type === 'icon') {
    return (
      <button
        className={clsx(
          defaultClasses,
          variantClasses[variant],
          colorClasses,
          className,
          isLoading && 'cursor-not-allowed opacity-50'
        )}
        onClick={action}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      </button>
    )
  }

  return (
    <button
      className={clsx(
        defaultClasses,
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color][variant],
        className,
        isLoading && 'cursor-not-allowed opacity-50'
      )}
      onClick={action}
    >
      {buttonContent}
    </button>
  )
}
