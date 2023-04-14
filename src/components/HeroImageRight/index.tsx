import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

import banner1 from '../../../public/msi_bg.jpg';
import banner2 from '../../../public/airocide_bg.jpg';
import banner3 from '../../../public/banner_3.jpg';
import banner4 from '../../../public/banner_4.jpg';

const useStyles = createStyles((theme) => ({
  root: {
    
    //backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:"100%",
    /* background:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 98%)", */
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} *4)`,
    display:"relative",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 0,
      paddingBottom:`calc(${theme.spacing.xl} *1)`,
    },
    
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    pointerEvents:"none",
  

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  backshade:{
    background:"linear-gradient(250deg, rgba(130, 201, 30, 0) 0%,  #000000  98%)",
    pointerEvents:"none",
    position:"absolute",
    top:0,
    zIndex:-10,
    width:"100%",
    
    left:0,
    [theme.fn.smallerThan("sm")]: {
      background: "#000000",
    },
  },

  frontContent:{
    margin:0,
    padding:rem(20),
    background:"linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%,   #000000  98%)",
    height:"100%",
    width:"100%",
    [theme.fn.smallerThan("sm")]: {
      background: "#000000",
    },
  }
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root} style={{pointerEvents:"none"}}>

     

      <div style={{pointerEvents:"all"}}>

      
      <Carousel showStatus={false} showArrows={false} autoPlay={true} infiniteLoop={true} className="md:absolute lg:absolute xl:absolute left-0 top-0 bottom-0 right-0 -z-20 flex-col flex max-h-[750px] pt-0  md:pt-14 lg:pt-14 xl:pt-14 w-full " showThumbs={false}>
                <div className="z-10">
                    <Image src={banner1} placeholder="blur" height={1080} width={1920}   
                    blurDataURL="h" alt="banner1"   style={{objectFit:"cover"}} className="h-fit aspect-video object-cover w-full object-center"/>
                </div>
                <div>
                    <Image src={banner2} placeholder="blur"  height={1080} width={1920}  
                     alt="banner2"   style={{objectFit:"cover"}}  className="h-fit aspect-video object-cover w-full object-center" />
                </div>
                <div>
                    <Image src={banner3} placeholder="blur"  height={1080} width={1920} alt="banner3"    style={{objectFit:"cover"}} className="h-fit aspect-video object-cover w-full object-center" />
                </div>
                <div>
                    <Image src={banner4} placeholder="blur"  height={1080} width={1920}  alt="banner4"   style={{objectFit:"cover"}} className="h-fit aspect-video object-cover w-full object-center" />
                </div>
            </Carousel>
      </div>
      <Container size="lg" className={classes.frontContent}  /* style={{background:"linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%,   #000000  98%)", margin:0, height:"100%", width:"100%", padding:rem(20)}} */>
        <div className={classes.inner }>
          <div className={classes.content}>
            <Title className={classes.title}>
              Building{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                Smart, High Performance & Sustainable
              </Text>{" "}
              Products for Future!
            </Title>

            <Text className={classes.description} mt={30}>
              For your better tomorrow, We need to Innovate today!.
            </Text>

              <Link href={"#get_started"}scroll={false} >
              
              <button className="bg-gradient-to-r from-pink-500 to-yellow-500 mt-10 px-10 py-3 rounded-md text-2xl font-bold text-white cursor-pointer" style={{pointerEvents:"all"}}>Get started</button>
             </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
