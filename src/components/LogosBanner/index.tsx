import {
  Container,
  createStyles,
  Group,
  Image,
  rem,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
  container: {
    marginBottom: rem(50),
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    gap: rem("20%"),
  },
  image: {
    width:"100px",
    [theme.fn.smallerThan("sm")]: {
      width: "60px",
    },
  },
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
}));

const LogosBanner = () => {
  const { classes, theme } = useStyle();

  return (
    <div className="flex max-w-6xl mx-auto mt-20" id="get_started">
      <div className="flex w-full flex-col">
        <Title 
        order={2}
        mb={"lg"}
        mt={"sm"}
        className={classes.title}
       
        ta={"center"}>
          OUR PARTNERS
        </Title>
        <div /* className={classes.slide} */ className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 gap-x-8 ">
          <div className="flex col-span-1 justify-center items-center w-full   px-8 py-3">
            <Image src={"airocide.svg"} alt="logo..."  fit="contain"/>
          </div>
          <div className="flex col-span-1 justify-center items-center w-full   px-8 py-3" >
            <Image src={"stabfor.png"} alt="logo..." fit="contain" />
          </div>
          <div  className="flex col-span-1 justify-center  items-center w-full   px-8 py-2">
            <Image src={"MSI_2_nobg.png"} alt="logo..."  fit="contain"/>
          </div>
          <div  className="flex col-span-1 justify-center  items-center w-full   px-8 py-2">
            <Image src={"batta.png"} alt="logo..."  fit="contain"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosBanner;
