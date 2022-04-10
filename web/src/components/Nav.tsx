import { createStyles, Navbar } from '@mantine/core';
import type { TFunction, TFunctionKeys } from 'i18next';
import type { DefaultResources } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import type { Icon } from 'tabler-icons-react';
import { Logout, Users } from 'tabler-icons-react';

import type { Path } from './TypedLink';
import { TypedLink, TypedNavLink } from './TypedLink';
import type { PathParams } from './TypedLink/PathParams';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][7],
        },
      },
    },
  };
});

interface NavItem {
  link: Path;
  label: keyof DefaultResources['glossary'];
  icon: Icon;
}

const items: NavItem[] = [
  { link: '/families', label: 'families', icon: Users },
];

export const Nav = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        {items.map(({ link, label, icon: Icon }) => (
          <TypedNavLink
            className={({ isActive }) =>
              cx(classes.link, { [classes.linkActive]: isActive })
            }
            to={link}
            key={label}
          >
            <Icon className={classes.linkIcon} />
            <span>{t(label)}</span>
          </TypedNavLink>
        ))}
      </Navbar.Section>
    </Navbar>
  );
};
