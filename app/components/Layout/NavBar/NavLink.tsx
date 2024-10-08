'use client';
import Link, { LinkProps } from 'next/link';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className: string;
};

export const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${
      className ?? ''
    } font-outfit uppercase hover:text-cyan-600 ${
      isActive ? 'text-white' : 'text-stone-400'
    }`}
    {...linkProps}
  />
);

export function NavLink(props: NavLinkProps) {
  const { children, ...linkProps } = props;

  return <Link {...linkProps}>{props.children}</Link>;
}
