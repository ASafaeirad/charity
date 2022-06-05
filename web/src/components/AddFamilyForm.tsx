import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Divider,
  Group,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import type { FieldError } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useCreateFamilyMutation } from '../api/familyApiSlice';
import type { CreateFamilyFields } from '../api/familyDto';
import { toFamilyDto } from '../api/familyDto';
import { familySchema } from '../api/familySchema';
import type { Family } from '../generated';
import { createFamilyDtoSeverities } from '../generated';

const filedError = (t: any, error: FieldError | undefined) =>
  error ? t(`errors:${error.message}`) : null;

interface Props {
  onSuccess?: (value: Family) => void;
  onError?: (e: unknown) => void;
}

export const AddFamilyForm: React.FC<Props> = ({ onSuccess, onError }) => {
  const { t } = useTranslation();
  const form = useForm<CreateFamilyFields>({
    resolver: zodResolver(familySchema),
  });
  const [createFamily] = useCreateFamilyMutation();

  const handleSubmit = form.handleSubmit((values) => {
    createFamily(toFamilyDto(values))
      .unwrap()
      .then((res) => {
        form.reset();
        onSuccess?.(res);
      })
      .catch(onError);
  });

  return (
    <Stack>
      <Title order={3}>{t('add_family')}</Title>
      <form onSubmit={handleSubmit}>
        <Stack spacing="sm" justify="center" sx={{ maxWidth: 400 }}>
          <TextInput
            label={t('name')}
            placeholder={t('name')}
            {...form.register('name')}
            error={filedError(t, form.formState.errors['name'])}
            required
          />

          <Controller
            control={form.control}
            name="severity"
            render={({ field, fieldState }) => (
              <Select
                label={t('severity.label')}
                placeholder={t('select.placeholder')}
                data={createFamilyDtoSeverities.map((s) => ({
                  value: s,
                  label: t(`severity.${s.toLowerCase()}` as any),
                }))}
                {...field}
                error={filedError(t, fieldState.error)}
                required
              />
            )}
          />

          <Divider label="سرپرست" />
          <TextInput
            label={t('name')}
            placeholder={t('name')}
            {...form.register('household.name')}
            error={filedError(t, form.formState.errors['household.name'])}
            required
          />
          <TextInput
            label={t('lastName')}
            placeholder={t('lastName')}
            {...form.register('household.lastName')}
            error={filedError(t, form.formState.errors['household.lastName'])}
            required
          />
          <RadioGroup label={t('gender')} required size="xs">
            <Radio value="male" label={t('male')} />
            <Radio value="female" label={t('female')} />
          </RadioGroup>
          <Group position="right" mt="md">
            <Button type="submit">{t('submit')}</Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
};
