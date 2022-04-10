import { Accordion, createStyles, Navbar, ThemeIcon } from '@mantine/core';
import type { DefaultResources } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation, useMatch } from 'react-router-dom';
import type { Icon } from 'tabler-icons-react';
import { Bookmarks, Users } from 'tabler-icons-react';

import type { Path } from './TypedLink';
import { TypedNavLink } from './TypedLink';

const useStyles = createStyles((theme) => {
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,
      },
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
      },
    },
  };
});

interface NavItem {
  label: keyof DefaultResources['glossary'];
  icon: Icon;
  links: {
    to: Path;
    label: keyof DefaultResources['glossary'];
  }[];
}

const items: NavItem[] = [
  {
    label: 'families',
    icon: Users,
    links: [
      { to: '/family/add', label: 'add_family' },
      { to: '/family/list', label: 'family_list' },
    ],
  },
  {
    label: 'campaigns',
    icon: Bookmarks,
    links: [
      { to: '/campaign/add', label: 'add_campaign' },
      { to: '/campaign/list', label: 'campaign_list' },
    ],
  },
];

export const Nav = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const location = useLocation();
  const initialItem = items.findIndex((item) =>
    item.links.find((to) => matchPath(to.to, location.pathname)),
  );

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Accordion
          disableIconRotation
          offsetIcon={false}
          initialItem={initialItem}
          styles={(theme) => ({
            control: { padding: `${theme.spacing.xs}px ${theme.spacing.sm}px` },
            contentInner: { paddingInlineStart: `${theme.spacing.xl + 16}px` },
            item: { borderBottom: 'none' },
          })}
        >
          {items.map(({ links, label, icon: Icon }) => (
            <Accordion.Item
              key={label}
              label={t(label)}
              icon={
                <ThemeIcon color="primary" variant="light">
                  <Icon size={16} />
                </ThemeIcon>
              }
            >
              {links.map(({ to, label: link }) => (
                <TypedNavLink
                  key={link}
                  className={({ isActive }) =>
                    cx(classes.link, { [classes.linkActive]: isActive })
                  }
                  to={to}
                >
                  {t(link)}
                </TypedNavLink>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </Navbar.Section>
    </Navbar>
  );
};
