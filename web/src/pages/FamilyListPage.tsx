import type { MantineColor } from '@mantine/core';
import {
  Badge,
  Button,
  Group,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useTranslation } from 'react-i18next';

import { useGetFamiliesQuery } from '../api/familyApiSlice';
import { AddFamilyForm } from '../components/AddFamilyForm';
import { CreateFamilyDtoSeverity } from '../generated';

const colorMap: Record<CreateFamilyDtoSeverity, MantineColor> = {
  [CreateFamilyDtoSeverity.Critical]: 'red',
  [CreateFamilyDtoSeverity.Case]: 'cyan',
  [CreateFamilyDtoSeverity.Poor]: 'yellow',
};

export const FamilyListPage: React.FC = () => {
  const { data: families } = useGetFamiliesQuery();
  const [value, toggle] = useBooleanToggle();
  const { t } = useTranslation();

  return (
    <Stack spacing="md">
      <SimpleGrid cols={3}>
        {families?.map((family) => (
          <Paper key={family.id} shadow="sm" p="md">
            <Group position="apart" style={{ marginBottom: 5 }}>
              <Title order={4}>{family.name}</Title>
              <Badge color={colorMap[family.severity]}>
                {t(`severity.${family.severity.toLowerCase()}` as any)}
              </Badge>
            </Group>
            <Text>{family.household?.fatherName}</Text>
          </Paper>
        ))}
      </SimpleGrid>
      <Button style={{ alignSelf: 'start' }} onClick={() => toggle(true)}>
        {t('add')}
      </Button>
      <Modal opened={value} onClose={() => toggle(false)}>
        <AddFamilyForm
          onSuccess={() => {
            showNotification({
              title: t('notification.success.title'),
              message: t('notification.success.family_created'),
            });
            toggle(false);
          }}
        />
      </Modal>
    </Stack>
  );
};
