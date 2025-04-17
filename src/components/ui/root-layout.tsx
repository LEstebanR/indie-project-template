import { Outlet } from '@tanstack/react-router'
import { Footer } from './footer'
import Header from '@components/ui/header'

export function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="mt-18 w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
