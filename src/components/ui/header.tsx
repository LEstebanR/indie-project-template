import { CustomLink } from "@components/ui/link";
import { Logo } from "@components/ui/logo";
import { Button } from "./button";

const HEADER_LINKS = [
  {
    label: "About",
    href: "/about",
  },
];

type HeaderLink = {
  label: string;
  href: string;
};

const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-10 bg-white backdrop-blur-sm border-b-2 border-gray-100 h-18">
      <div className="flex justify-between  items-center xl:w-5/6 w-full px-4 xl:px-0">
        <Logo />
        <div className="flex gap-4">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <CustomLink href={link.href} key={link.label}>
              {link.label}
            </CustomLink>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" type="link" href="/login">
            LogIn
          </Button>
          <Button type="link" href="/ signup">
            SignUp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
