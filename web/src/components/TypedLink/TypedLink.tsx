import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { buildUrl } from './buildUrl';
import type { PathParams } from './PathParams';
import type { Path } from './Paths';

interface Props<P extends Path> extends Omit<LinkProps, 'to'> {
  to: P;
  params?: PathParams<P>;
  children?: ReactNode;
}

export const TypedLink = <P extends Path>({
  to,
  params,
  children,
  ...props
}: Props<P>) => {
  return (
    <Link to={buildUrl(to, params)} {...props}>
      {children}
    </Link>
  );
};
