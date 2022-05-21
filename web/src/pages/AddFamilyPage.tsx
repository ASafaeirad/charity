import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useTranslation } from 'react-i18next';

import { useCreateFamilyMutation } from '../api/familyApiSlice';
import type { CreateFamilyFields } from '../api/familyDto';
import { toFamilyDto } from '../api/familyDto';
import { familySchema } from '../api/familySchema';
import { createFamilyDtoSeverities } from '../generated';

export const AddFamilyPage: React.FC = () => {
  const { t } = useTranslation();
  const form = useForm<CreateFamilyFields>({
    initialValues: { name: '', severity: undefined as any },
    schema: zodResolver(familySchema),
  });
  const [createFamily] = useCreateFamilyMutation();

  const handleSubmit = form.onSubmit((values) => {
    createFamily(toFamilyDto(values)).then(() => {
      showNotification({
        title: t('notification.success.title'),
        message: t('notification.success.family_created'),
      });
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="sm" justify="center" sx={{ maxWidth: 400 }}>
        <TextInput
          label={t('name')}
          placeholder={t('name')}
          {...form.getInputProps('name')}
        />

        <Select
          label={t('severity.label')}
          placeholder={t('select.placeholder')}
          data={createFamilyDtoSeverities.map((s) => ({
            value: s,
            label: t(`severity.${s.toLowerCase()}` as any),
          }))}
          {...form.getInputProps('severity')}
        />

        <Group position="right" mt="md">
          <Button type="submit">{t('submit')}</Button>
        </Group>
      </Stack>
    </form>
  );
};
