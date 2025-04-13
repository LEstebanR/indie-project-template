import { Outlet } from "@tanstack/react-router";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="w-full">Mi Header aquí</header>
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
