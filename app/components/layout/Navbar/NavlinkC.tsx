import { Link } from "react-router";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  hasDropdown?: boolean;
}

const NavLinkC = ({ href, children, hasDropdown = false }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={`
        flex items-center gap-1
        text-sm lg:text-base font-medium text-gray-700
        hover:text-gray-900
        transition-colors
        ${hasDropdown ? 'cursor-pointer' : ''}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLinkC;