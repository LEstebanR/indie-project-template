import React from 'react'

export const Link = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode
  to: string
}) => {
  return React.createElement('a', { href: to, ...props }, children)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRouter = () => ({
  state: {
    location: {
      pathname: '/',
    },
  },
})

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigate = () => () => {}

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(React.Fragment, null, children)
}
