import {
  createStyles,
  Badge,
  Group,
  Image,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  CardSection,
  getStylesRef,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Air Solution",
    description:
      "Clean air is a basic right. The responsibility to ensure that falls to us.",
    icon: "windmill.jpg",
  },
  {
    title: "Water Solution",
    description:
      "Conserve water, conserve life. You never know the worth of water until the well runs dry. Save water, and it will save you",
    icon: "water.jpg",
  },
  {
    title: "IOT Solution",
    description:
      "TIf you think that the internet has changed your life, think again. The Internet of Things is about to change it all over again!",
    icon: "iot.jpg",
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
    cursor: "pointer",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    ":hover": {
      border: `1px solid ${theme.primaryColor}`,
      background: "rgba(9,82,165,0.2)",
    },
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
  image: {
    objectFit: "cover",
    minHeight: "250px",
  },
}));

const FeaturesCards = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <CardSection
        style={{
          height: "70%",
          overflow: "hidden",
        }}
      >
        <Image
          src={feature.icon}
          classNames={{
            image: classes.image,
          }}
          alt="loading..."
        />
      </CardSection>
      <Group>
        <Text
          fz={"md"}
          fw={500}
          style={{
            display: "block",
          }}
        >
          {feature.title}
        </Text>
        <Text
          fz={"xs"}
          c="dimmed"
          style={{
            display: "block",
          }}
        >
          {feature.description}
        </Text>
      </Group>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturesCards;
