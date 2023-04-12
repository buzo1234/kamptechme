import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Image,
  Text,
  Menu,
  Button,
  getStylesRef,
  ScrollArea,
  UnstyledButton,
  ThemeIcon,
  Box,
  Center,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Icon, IconChevronDown } from "@tabler/icons-react";
import { theme } from "@/utils/theme";
import Link from "next/link";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    margin:0,
    padding:0,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  iconActive: {
    ref: getStylesRef("icon"),
  },
  item: {
    ":hover": {
      color: theme.colors.blue[4],
    },
  },
  btn: {
    background: theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    ":hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  linked: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  collapse: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.xl}`,
    "&:active": theme.activeStyles,
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),
  },
}));

interface HeaderResponsiveProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string; icon: Icon }[];
  }[];
}



const Navbar = ({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, cx, theme } = useStyles();

 
  const drawerLinks = links[1].links?.map((item, index) => {
    return (
      <UnstyledButton key={item.label} className={classes.collapse}>
        <Link href={item.link} scroll={false} onClick={toggle}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={24} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.label}
            </Text>
          </div>
        </Group>
        </Link>
      </UnstyledButton>
    );
  });

  const items = links.map((link) => {
    if (link.links) {
      return (
        <Menu trigger={"hover"} key={link.label}>
          <Menu.Target>
            <Button className={classes.btn}>{link.label}</Button>
          </Menu.Target>
          <Menu.Dropdown>
            {link.links.map((item, index) => {
              return (
                
                <Menu.Item
                  className={classes.item}
                  component={"a"}
                  key={item.label}
                  icon={
                    <item.icon className={classes.iconActive} stroke={"1.5"} />
                  }
                  href={item.link}
                  
                >
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <Link
        //key={link.label}
        href={link.link}
        key={link.label}
        scroll={false}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        /* onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          close();
        }} */
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 left-0 z-50">
      <Header height={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header} style={{margin:"auto"}}>
          <Link href={"/"}>
          
          <Group className="cursor-pointer">
            <Image src={"logo.png"} width={"30px"} alt="logo..." key="logo"/>
            <Text
              fw={700}
              style={{
                letterSpacing: "1.8",
              }}
            >
              Kamptech Solutions
            </Text>
          </Group>
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
      </Header>
      <Drawer
        padding="md"
        zIndex={1000000}
        size={"100%"}
        opened={opened}
        onClose={close}
        title={
          <Group>
            <Image src={"logo.png"} width={"30px"} alt="logo..." key="logo2"/>
            <Text
              fw={700}
              style={{
                letterSpacing: "1.8",
              }}
            >
              Kamptech
            </Text>
          </Group>
        }
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Link href={"#home"} className={classes.linked} scroll={false} onClick={toggle}>
            Home
          </Link>
          <UnstyledButton className={classes.linked} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Products
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{drawerLinks}</Collapse>
          <Link href={"#about_us"} className={classes.linked} scroll={false} onClick={toggle}>
            About Us
          </Link>
          <Link href={"#contact_us"} className={classes.linked} scroll={false} onClick={toggle}>
            Contact Us
          </Link>
        </ScrollArea>
      </Drawer>
    </div>
  );
};

export default Navbar;
