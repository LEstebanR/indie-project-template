import { CustomLink } from "@components/ui/link";

export function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-primary">Hello world!!</p>
      <CustomLink href="/about">About</CustomLink>
    </div>
  );
}
