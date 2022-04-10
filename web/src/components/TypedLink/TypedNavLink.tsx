import type { ReactNode } from 'react';
import type { NavLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { buildUrl } from './buildUrl';
import type { PathParams } from './PathParams';
import type { Path } from './Paths';

interface Props<P extends Path> extends Omit<NavLinkProps, 'to'> {
  to: P;
  params?: PathParams<P>;
  children?: ReactNode;
}

export const TypedNavLink = <P extends Path>({
  to,
  params,
  children,
  ...props
}: Props<P>) => {
  return (
    <NavLink to={buildUrl(to, params)} {...props}>
      {children}
    </NavLink>
  );
};
