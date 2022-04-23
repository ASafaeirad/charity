import { Box } from '@mantine/core';

import { useFamiliesQuery } from '../api/familyApiSlice';

export const FamilyListPage: React.VFC = () => {
  const { data: families } = useFamiliesQuery();
  console.log(families);

  return (
    <Box>
      {families?.map((family) => (
        <Box key={family.id}>
          {family.id} {family.name} {family.household?.fatherName}
        </Box>
      ))}
    </Box>
  );
};
