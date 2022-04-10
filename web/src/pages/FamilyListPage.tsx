import { Box } from '@mantine/core';

import { useFamiliesQuery } from '../api/familyApiSlice';

export const FamilyListPage: React.VFC = () => {
  const { data } = useFamiliesQuery();
  return <Box>{JSON.stringify(data)}</Box>;
};
