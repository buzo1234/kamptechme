import {
  Container,
  createStyles,
  Group,
  Image,
  rem,
  Text,
} from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
  container: {
    marginBottom: rem(50),
  },
  slide: {
    display: "felx",
    justifyContent: "center",
    gap: rem("10%"),
  },
  image: {
    width:"100px",
    [theme.fn.smallerThan("sm")]: {
      width: "60px",
    },
  },
}));

const LogosBanner = () => {
  const { classes, theme } = useStyle();

  return (
    <div className={classes.container}>
      <Container fluid>
        <Text align="center" size={rem(20)} fw={"bold"} mt={rem(50)} mb={"lg"}>
          PARTENERSHIP WITH
        </Text>
        <Group className={classes.slide}>
          <div className={classes.image}>
            <Image src={"airocide.svg"} alt="logo..." />
          </div>
          <div className={classes.image}>
            <Image src={"stabfor.png"} alt="logo..." />
          </div>
          <div className={classes.image}>
            <Image src={"msi.png"} alt="logo..." />
          </div>
        </Group>
      </Container>
    </div>
  );
};

export default LogosBanner;
