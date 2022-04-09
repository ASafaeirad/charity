/* eslint-disable @typescript-eslint/naming-convention */
import { Global } from '@mantine/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
      }}
    />
  );
};
