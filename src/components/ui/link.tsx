import { Link } from '@tanstack/react-router'
import { clsx } from 'clsx'

export const CustomLink = ({
  children,
  href,
  withIcon = false,
  icon,
  blank,
  action,
  className,
  type,
  isMenu,
}: {
  children: React.ReactNode
  href: string
  withIcon?: boolean
  icon?: React.ReactNode
  blank?: boolean
  action?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
  type?: string
  isMenu?: boolean
}) => {
  return (
    <Link
      to={href}
      className={clsx(
        'hover:text-primary hover:animate-underline-link decoration-2 underline-offset-4 transition-all duration-300',
        className,
        type === 'text' ? 'hover:underline' : null,
        isMenu ? null : 'text-link'
      )}
      target={blank ? '_blank' : '_self'}
      onClick={(e) => {
        if (action) {
          action(e)
        }
      }}
    >
      <div className="flex flex-row items-center gap-1">
        {withIcon && icon}
        {children}
      </div>
    </Link>
  )
}
export { Link }
