import { Outlet } from "@tanstack/react-router";
import { Footer } from "./footer";
import Header from "@components/ui/header";

export function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1 w-full mt-18">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
