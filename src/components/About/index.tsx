import { Container, Text, createStyles, rem } from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
  root: {
    "&::after": {
      content: '""',
      display: "block",
      width: rem(80),
      height: rem(2),
      backgroundColor: theme.fn.primaryColor(),
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const About = () => {
  const { classes } = useStyle();
  return (
    <div>
      <Container py={rem(45)}>
        <Text
          fz={rem(36)}
          mb={"lg"}
          className={classes.root}
          fw={500}
          align={"center"}
        >
          About us
        </Text>
        <Text c={"dimmed"} mt={"xl"} fs={"italic"} fz={"sm"}>
          {` Kamptech Solutions is a company that is on a mission to make the world
          cleaner and better. We specialize in clean energy, clean air and clean
          water solutions that utilze IoT technology to make them more efficient
          and effective. Our products are designed to improve the quality of our
          envionment and make it sustainable for future generations. Moreover,
          we have diversified into the IT solutions domain to help our customers
          in their digital transformation journey and increase their
          productibity and efficiency. We believe that technology can be a
          solution to the world's biggest problems and we're working to make it
          happen.`}
        </Text>
      </Container>
    </div>
  );
};

export default About;
