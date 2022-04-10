import type { RouteObject } from 'react-router-dom';

import type { Path } from './components/TypedLink';

declare module 'react-router-dom' {
  interface CRouteObject extends Omit<RouteObject, 'path'> {
    path: Path;
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  export function useRoutes(
    routes: CRouteObject[],
    locationArg?: Partial<Location> | string,
  ): React.ReactElement | null;
}
