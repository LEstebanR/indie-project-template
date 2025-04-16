import { Link } from "@tanstack/react-router";

export const CustomLink = ({
  children,
  href,
  withIcon = false,
  icon,
  blank,
}: {
  children: React.ReactNode;
  href: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
  blank?: boolean;
}) => {
  return (
    <Link
      to={href}
      className=" hover:text-primary hover:animate-underline-link underline-offset-4 decoration-2 transition-all duration-300"
      target={blank ? "_blank" : "_self"}
    >
      <div className="flex flex-row items-center gap-1">
        {withIcon && icon}
        {children}
      </div>
    </Link>
  );
};
export { Link };
