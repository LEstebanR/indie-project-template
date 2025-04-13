import { Link } from "@tanstack/react-router";

export function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <p className="text-red-500">Hello world!!</p>
      <Link to="/about">About</Link>
    </div>
  );
}
