import {
  Container,
  createStyles,
  Group,
  
  rem,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Image from "next/image";

import partner1 from '../../../public/airocide.png'
import partner2 from '../../../public/stabfor.png'
import partner3 from '../../../public/MSI_2_nobg.png'
import partner4 from '../../../public/puro.png'
import partner5 from '../../../public/ip_video.png'

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
        {/* grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 gap-x-8 */}
        <div /* className={classes.slide} */ className="w-full mx-auto flex-wrap flex px-4  justify-center">
          <div className="flex  justify-center items-center w-[170px] md:w-[185px] lg:w-[200px] xl:w-[210px]   px-8 py-3">
            <Image src={partner1} placeholder="blur" width={170} height={100} alt="logo..."  style={{objectFit:"contain"}}/>
          </div>
          <div className="flex  justify-center items-center w-[170px] md:w-[185px] lg:w-[200px] xl:w-[210px]   px-8 py-3" >
            <Image src={partner2} placeholder="blur" width={170} height={100} alt="logo..." style={{objectFit:"contain"}} />
          </div>
          <div  className="flex  justify-center  items-center w-[170px] md:w-[185px] lg:w-[200px] xl:w-[210px]   px-8 py-2">
            <Image src={partner3} placeholder="blur" width={170} height={100} alt="logo..."  style={{objectFit:"contain"}}/>
          </div>
          <div  className="flex  justify-center  items-center w-[170px] md:w-[185px] lg:w-[200px] xl:w-[210px]   px-8 py-2">
            <Image src={partner4} placeholder="blur" width={170} height={100} alt="logo..."  style={{objectFit:"contain"}}/>
          </div>
          <div  className="flex  justify-center  items-center w-[170px] md:w-[185px] lg:w-[200px] xl:w-[210px]   px-8 py-2">
            <Image src={partner5} placeholder="blur" width={170} height={100} alt="logo..."  style={{objectFit:"contain"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosBanner;
