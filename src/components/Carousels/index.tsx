import {
  Card,
  CardSection,
  Container,
  createStyles,
  rem,
  Text,
} from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel";
import CardWithCarousel from "../CardWithCarousel";
import Autoplay from "embla-carousel-autoplay";

const useStyle = createStyles((theme) => ({
  body: {
    margin: "0px rem(50)",
  },
  container: {},
  indicator: {},
}));

const Crousels = () => {
  const { classes } = useStyle();
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className={classes.body}>
      <Container className={classes.container} fluid>
        <Text fz="xl" fw="bold" mt="md">
          Popular Products
        </Text>
        <Carousel
          mx="auto"
          withIndicators
          withControls={false}
          slideSize="23.333333%"
          slideGap="md"
          loop
          align="start"
          mt="md"
          mb="md"
          classNames={{
            indicator: classes.indicator,
          }}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
          styles={{
            indicator: {
              width: rem(12),
              height: rem(4),
              transition: "width 250ms ease",

              "&[data-active]": {
                width: rem(40),
              },
            },
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {slides.map((item) => {
            return (
              <Carousel.Slide key={item}>
                <CardWithCarousel />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default Crousels;
