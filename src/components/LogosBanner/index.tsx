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
}));

const LogosBanner = () => {
  const { classes, theme } = useStyle();

  return (
    <div className="flex max-w-6xl mx-auto" id="get_started">
      <div className="flex w-full flex-col">
        <Text align="center" size={rem(25)} fw={"bold"} mt={rem(50)} mb={"lg"}>
          OUR PARTNERS
        </Text>
        <div /* className={classes.slide} */ className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 gap-x-8 ">
          <div className="flex col-span-1 justify-center items-center w-full   px-8 py-3">
            <Image src={"airocide.svg"} alt="logo..."  fit="contain"/>
          </div>
          <div className="flex col-span-1 justify-center items-center w-full   px-8 py-3" >
            <Image src={"stabfor.png"} alt="logo..." fit="contain" />
          </div>
          <div  className="flex col-span-1 justify-center  items-center w-full   px-8 py-2">
            <Image src={"MSI_2_nobg.png"} alt="logo..."  fit="contain"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosBanner;
