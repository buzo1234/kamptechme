import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  CardSection,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { IconHeartFilled, IconHeart } from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("detail")}`]: {
        color: "rgba(0,114,245,0.8)",
      },
      cursor: "pointer",
      background: "rgba(0,114,245,0.2)",
      border: "0.1px solid rgba(0,114,245)",
    },
    [theme.fn.smallerThan("sm")]: {
      [`& .${getStylesRef("detail")}`]: {
        fontSize: rem(12),
      },
    },
  },

  cardHeader: {
    justifyContent: "space-between",
  },
  detail: {
    ref: getStylesRef("detail"),
  },
  button: {
    ref: getStylesRef("button"),
  },
}));

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

const CardWithCarousel = () => {
  const { classes } = useStyles();
  const [state, setState] = React.useState(false);
  return (
    <Card radius="md" withBorder padding="xl" className={classes.carousel}>
      <CardSection>
        <Image src={images[0]} alt="product..." />
      </CardSection>
      <Group className={classes.cardHeader} mt="sm">
        <Text fz={"lg"} fw={600}>
          Ten Chair
        </Text>
        <Text fw={700}>$299</Text>
      </Group>
      <Text className={classes.detail} fz={"sm"} c={"dimmed"} mt="lg">
        The Ten Chair is built using sustainably sourced hardwoods
      </Text>
      <Group mt="md">
        <Button style={{ flex: 1 }} className={classes.button}>
          Buy
        </Button>
        <ActionIcon onClick={() => setState(!state)}>
          {state ? (
            <IconHeartFilled
              stroke={"1.2"}
              strokeOpacity={"0.8"}
              color="#910838"
              style={{
                color: " #910838",
              }}
            />
          ) : (
            <IconHeart stroke={"1.2"} strokeOpacity={"0.8"} color="#910838" />
          )}
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default CardWithCarousel;
