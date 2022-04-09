import { createStyles, Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { Logout, Users } from 'tabler-icons-react';

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

const data = [{ link: 'families', label: 'خانواده ها', icon: Users }];

export const Nav = () => {
  const { classes, cx } = useStyles();

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        {data.map(({ link, label, icon: Icon }) => (
          <NavLink
            className={({ isActive }) =>
              cx(classes.link, { [classes.linkActive]: isActive })
            }
            to={link}
            key={label}
          >
            <Icon className={classes.linkIcon} />
            <span>{label}</span>
          </NavLink>
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NavLink to="/logout" className={classes.link}>
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </NavLink>
      </Navbar.Section>
    </Navbar>
  );
};
