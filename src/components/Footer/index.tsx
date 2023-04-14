import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const Footer = ({ data }: FooterLinksProps) => {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group>
            <Image src={"logo.png"} width={"30px"} alt="logo..." />
            <Text
              fw={700}
              style={{
                letterSpacing: "1.8",
              }}
            >
              Kamptech
            </Text>
          </Group>
          <Text size="xs" color="dimmed" className={classes.description}>
            Building Smart, High Performance & Sustainable products for Future!
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Kamptech.Sol. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {/* <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon> */}
          <ActionIcon size="lg">
            <Link href="https://www.instagram.com/kamptech11/">
            
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://twitter.com/Kamptech11/">
            
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://www.facebook.com/profile.php?id=100091748850716&mibextid=ZbWKwL">
            
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg">
            <Link href="https://www.linkedin.com/company/kamptech-solutions/">
            
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
