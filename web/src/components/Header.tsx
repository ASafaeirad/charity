import { Header as BaseHeader, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const Header: React.VFC = () => {
  const { t } = useTranslation();

  return (
    <BaseHeader height={60} p="xs">
      <Title order={4}>{t('logo')}</Title>
    </BaseHeader>
  );
};
