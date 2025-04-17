import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Layout } from '@components/ui/root-layout'

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
})
