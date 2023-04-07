import { Container, createStyles, rem, Text } from "@mantine/core";
import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const useStyle = createStyles({
  container: {
    marginBottom: rem(50),
  },
  slide: {},
});

const LogosBanner = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { classes, theme } = useStyle();
  const company = [
    "Google",
    "Microsoft",
    "Walmart",
    "Hp",
    "Dell",
    "Tata",
    "Accenture",
    "Blackrock",
  ];
  return (
    <div className={classes.container}>
      <Container fluid>
        <Text align="center" size={rem(20)} fw={"bold"} mt={rem(50)} mb={"lg"}>
          TRUSTED BY
        </Text>
        <Carousel
          mx="auto"
          withControls={false}
          loop
          slideSize={rem("20%")}
          slideGap="lg"
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {company.map((item, index) => {
            return (
              <Carousel.Slide className={classes.slide} key={index}>
                <Text
                  fz={rem(40)}
                  color={theme.colors.gray[Math.min(index / 9, index / 5)]}
                  fw={900}
                  align="center"
                  ff={"monospace"}
                  fs="oblique"
                >
                  {item}
                </Text>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default LogosBanner;
