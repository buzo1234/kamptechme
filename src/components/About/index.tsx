import { Container, Text, Title, createStyles, rem } from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
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
    <div className="" id="about_us">
      <Container py={rem(45)} >
        <Title
          order={2}
          mb={"lg"}
          mt={"sm"}
          className={classes.title}
         
          ta={"center"}
        >
          ABOUT US
        </Title>
        
        <Text  className="text-center text-lg md:text-2xl lg:text-2xl xl:text-2xl ">
        <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}

                className="font-bold"
              >
                KampTech Solutions
              </Text>
          {`  is a company that is on a mission to make the world
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
