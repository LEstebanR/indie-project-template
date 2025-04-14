import { CustomLink } from "@components/ui/link";
import { H1 } from "@components/ui/typography";

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
      <div className="flex justify-between items-center xl:w-3/6 2xl:w-2/6 w-full px-4 xl:px-0">
        <H1>Project Name</H1>
        <div className="flex gap-4">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <CustomLink href={link.href} key={link.label}>
              {link.label}
            </CustomLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
