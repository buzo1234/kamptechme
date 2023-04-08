import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";

import { Avatar } from "@mantine/core";

const mockData = [
  {
    title: "John Wick",
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "JohnWick234@gmail.com",
    description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!",
  },
  {
    title: "Shane watson",
    src: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "ShaneWatson@gmail.com",
    description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!",
  },
  {
    title: "Lex Luther",
    src: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "LexLuther@gmail.com",
    description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illo aspernatur, veniam corrupti alias eos officia tempora est harum commodi, earum nulla voluptatem dolores aliquid perspiciatis iusto architecto? Sed, iusto!",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
  content: {
    "&": {
      marginBottom: 0,
    },
  },
  body: {
    fontSize: theme.fontSizes.sm,
    paddingTop: theme.spacing.sm,
    paddingLeft: rem(54),
  },
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

const Banner = () => {
  const { classes, theme } = useStyles();
  const features = mockData.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Group>
        <Avatar src={`${feature.src}`} alt="it's me" radius={"xl"} />
        <div>
          <Text fz="sm">{feature.title}</Text>
          <Text fz="xs" c="dimmed">
            {feature.email}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: `${feature.description}` }}
        />
      </TypographyStylesProvider>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" mt={"lg"}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        WHAT THEY SAY FOR OUR PRODUCTS
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Products are made in the factory, but brands are created in the mind.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Banner;
