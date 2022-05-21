import { Box } from '@mantine/core';

import { useGetFamiliesQuery } from '../api/familyApiSlice';

export const FamilyListPage: React.FC = () => {
  const { data: families } = useGetFamiliesQuery();

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
