import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    minHeight:"600px",
    flexDirection:"column",
    backgroundColor: 'black',
    [theme.fn.smallerThan('sm')]: {
      paddingTop: 0,
      paddingBottom: `calc(${theme.spacing.xl} *1)`,
    },
  },

  inner: {
    //display: 'absolute',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    height:"100%",
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
    
  },


  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(28),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    /* opacity: 0.75, */
    maxWidth: rem(500),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  /*  backshade: {
    background:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%,  #000000  98%)',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: -10,
    width: '100%',

    left: 0,
    [theme.fn.smallerThan('sm')]: {
      background: '#000000',
    },
  }, */

  frontContent: {
    margin: 0,
    paddingTop: rem(50),
    paddingBottom:rem(20),
    paddingLeft:rem(20),
    paddingRight:rem(20),
    /* background:
      'linear-gradient(270deg, rgba(0, 0, 0, ) 0%, rgba(100, 100, 100, 0) 30%,   #000000  98%)', */
    height: '100%',
    width: '100%',
    
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    [theme.fn.smallerThan('sm')]: {
      background: '#000000',
      transform: 'translateY(0%)',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);


  useLayoutEffect(() => {
    if (childRef.current && parentRef.current) {
      const childHeight = childRef.current.offsetHeight;
      parentRef.current.style.height = `${childHeight}px`;

      console.log(childHeight, parentRef.current.style.height);
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={classes.root} style={{ pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'all' }}>
        <Carousel
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          className=' -z-20 flex-col pt-0 block   w-full '
          showThumbs={false}
        >
          <div className='z-10 h-full flex items-center justify-center'>
            {isLoading ?  <img
              src='placeholderImage.webp' loading='lazy'
              alt='banner1'
              onLoad={handleImageLoad}
              className='h-full aspect-auto object-center w-full object-contain '
            /> :  <img
              src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/64772506bd1d1a8ea931/view?project=646339a61beac87efd09&mode=admin' loading='lazy'
              alt='banner1'
              onLoad={handleImageLoad}
              className='h-full aspect-auto object-center w-full object-contain '
            />}
           
          </div>
          <div className='z-10 h-full flex items-center justify-center'>
          {isLoading ?  <img
              src='placeholderImage.webp' loading='lazy'
              alt='banner1'
              onLoad={handleImageLoad}
              className='h-full aspect-auto object-center w-full object-contain '
            /> :  
            <img
              src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477428a26296fd65760/view?project=646339a61beac87efd09&mode=admin' loading='lazy'
              alt='banner1'
              className='h-full aspect-auto object-center w-full object-contain '
            />}
          </div>
          <div className='z-10 h-full flex items-center justify-center'>
          {isLoading ?  <img
              src='placeholderImage.webp' loading='lazy'
              alt='banner1'
              onLoad={handleImageLoad}
              className='h-full aspect-auto object-center w-full object-contain '
            /> :  
            <img
              src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/64774295a6f8f40b527b/view?project=646339a61beac87efd09&mode=admin' loading='lazy'
              alt='banner1'
              className='h-full aspect-auto object-center w-full object-contain '
            />}
          </div>
          <div className='z-10 h-full flex items-center justify-center'>
          {isLoading ?  <img
              src='placeholderImage.webp' loading='lazy'
              alt='banner1'
              onLoad={handleImageLoad}
              className='h-full aspect-auto object-center w-full object-contain '
            /> :  
            <img
              src='https://appwrite.techsouqdubai.com/v1/storage/buckets/647724cbbee87d2e8f59/files/6477429ab9da4c61356c/view?project=646339a61beac87efd09&mode=admin' loading='lazy'
              alt='banner1'
              className='h-full aspect-auto object-center w-full object-contain '
            />}
          </div>
          {/* <div>
                    <Image src={banner2} placeholder="blur"  height={1080} width={1920}  
                     alt="banner2"   style={{objectFit:"cover"}}  className="h-fit aspect-video object-cover w-full object-center" />
                </div>
                <div>
                    <Image src={banner3} placeholder="blur"  height={1080} width={1920} alt="banner3"    style={{objectFit:"cover"}} className="h-fit aspect-video object-cover w-full object-center" />
                </div>
                <div>
                    <Image src={banner4} placeholder="blur"  height={1080} width={1920}  alt="banner4"   style={{objectFit:"cover"}} className="h-fit aspect-video object-cover w-full object-center" />
                </div> */}
        </Carousel>
      </div>
      <Container
        size='lg'
        className={
          classes.frontContent + " bg-gradient-to-r from-black/50 to-transparent md:absolute lg:absolute xl:absolute block"
        } /* style={{background:"linear-gradient(250deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%,   #000000  98%)", margin:0, height:"100%", width:"100%", padding:rem(20)}} */
      >
        <div className={classes.inner}>
          <div className={classes.content + " flex flex-col justify-between h-full"} >
            <div>

            
            <Title className={classes.title}>
              Building{' '}
              <Text
                component='span'
                inherit
                variant='gradient'
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Smart, High Performance & Sustainable
              </Text>{' '}
              Products for Future!
            </Title>

           
            </div>
            <div>
            <Text className={classes.description} mt={30}>
              For your better tomorrow, We need to Innovate today!.
            </Text>

            <Link href={'#get_started'} scroll={false}>
              <button
                className='bg-gradient-to-r from-pink-500 to-yellow-500 mt-2 px-10 py-3 rounded-md text-2xl font-bold text-white cursor-pointer'
                style={{ pointerEvents: 'all' }}
              >
                Get started
              </button>
            </Link>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
}
