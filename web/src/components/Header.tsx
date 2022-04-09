import { Header as BaseHeader, Title } from '@mantine/core';

export const Header: React.VFC = () => {
  return (
    <BaseHeader height={60} p="xs">
      <Title order={4}>پناه نور مانا</Title>
    </BaseHeader>
  );
};
