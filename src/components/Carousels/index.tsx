import {
  createStyles,
  Badge,
  Group,
  Image,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  CardSection,
  getStylesRef,
} from '@mantine/core';
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconArrowRight,
} from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Air Purification',
    description:
      'Airocide is the most technologically advanced air purifier on the market. Our mission was to make sure that the look complemented the performance. We have won an Edison award for our efforts, and our customers tell us that our air purifiers are a perfect match for the modern home. But, our design is not just meant to look good. It is critical to making sure that our NASA developed technology gets just the right amount of air to be as efficient as possible. This name for this is the Coanda effect.',
    icon: 'airocide.webp',
  },
  {
    title: 'Water Solution',
    description:
      'The STABFOR unit® is not an ordinary drinking water filter, ⁠ it is not a filter at all. It is a flow-through device that comprehensively purifies water throughout the entire household and makes it living, clean and healthy without chemicals.',
    icon: '11024.jpg',
  },
  {
    title: 'IT Solutions',
    description:
      'MSI has more than 30 years`&apos; of experience in motherboard design & manufacturing, ranked among the world`&apos;s top 3 largest motherboard manufacturers, recognized internationally for high quality and stability by clients and individual users.',
    icon: 'msi_it.jpg',
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',
    paddingBottom: rem(20),
    paddingRight:rem(20),
    paddingLeft:rem(20),
    textAlign: 'center',
  },

  card: {
    cursor: 'pointer',
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    ':hover': {
      border: `1px solid ${theme.primaryColor}`,
      background: 'rgba(9,82,165,0.2)',
    },
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
  image: {
    objectFit: 'cover',
    minHeight: '250px',
  },
}));

const FeaturesCards = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={classes.card}
      padding='xl'
    >
      <CardSection
        style={{
          height: '70%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={feature.icon}
          classNames={{
            image: classes.image,
          }}
          alt='loading...'
        />
      </CardSection>
      <Group>
        <Text
          fz={'md'}
          fw={500}
          style={{
            display: 'block',
          }}
        >
          {feature.title}
        </Text>
        <Text
          fz={'xs'}
          c='dimmed'
          style={{
            display: 'block',
          }}
        >
          {feature.description}
        </Text>
      </Group>
    </Card>
  ));

  return (
    <div className='mt-20 '>
      <Title order={2} className={classes.title} ta='center' mt='sm'>
        Designing products for sustainable future!
      </Title>

      <Text c='dimmed' className={classes.description} ta='center' mt='sm'>
        We believe that technology can be a solution to the world&apos;s biggest
        problems and we&apos;re working to make it happen.
      </Text>

      {/* <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {features}
      </SimpleGrid> */}

      <div className='flex flex-col w-full mt-5' id='air_purification'>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  '>
          <div className='flex w-full col-span-1 px-5 md:px-0 lg:px-0 xl:px-0'>
            <Image src={'airocide.webp'} />
          </div>
          <div className='flex  flex-col w-full col-span-1 px-5 md:px-20 lg:px-20 xl:px-20 justify-between'>
            <div>
              <h1 className='font-bold text-2xl mt-3 md:text-5xl lg:text-5xl xl:text-5xl z-10'>
                Air Purification
              </h1>
              <p className='md:mt-10 lg:mt-10 xl:mt-10 mt-2 z-10'>
                Airocide is the most technologically advanced air purifier on
                the market. Our mission was to make sure that the look
                complemented the performance. We have won an Edison award for
                our efforts, and our customers tell us that our air purifiers
                are a perfect match for the modern home. But, our design is not
                just meant to look good. It is critical to making sure that our
                NASA developed technology gets just the right amount of air to
                be as efficient as possible. This name for this is the Coanda
                effect.
              </p>
            </div>

            <div className='flex w-full justify-end'>
            <button className='flex items-center mb-5 px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md text-white font-semibold gap-x-2 mt-3 md:mt-0 lg:mt-0 xl:mt-0 text-xl'>
                Learn more <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-10 md:py-0 lg:py-0 xl:py-0   '
          id='water_solutions'
        >
          <div className=' flex-col w-full  col-span-1 px-5 md:px-20 lg:px-20 xl:px-20 hidden md:flex lg:flex xl:flex  z-10 py-10 justify-between '>
            <div>
              <h1 className='font-bold text-2xl mt-3 md:text-5xl lg:text-5xl xl:text-5xl  z-10'>
                Water Solutions
              </h1>
              <p className='md:mt-10 lg:mt-10 xl:mt-10 mt-2   z-10'>
                The STABFOR unit® is not an ordinary drinking water filter, it
                is not a filter at all. It is a flow-through device that
                comprehensively purifies water throughout the entire household
                and makes it living, clean and healthy without chemicals.
              </p>
            </div>
            <div className='flex w-full justify-end'>
            <button className='flex items-center mb-5 px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md text-white font-semibold gap-x-2 mt-3 md:mt-0 lg:mt-0 xl:mt-0 text-xl'>
                Learn more <IconArrowRight />
              </button>
            </div>
          </div>
          <div className='flex w-full col-span-1 px-5 md:px-0 lg:px-0 xl:px-0 bg-[#31AADB]  py-0 md:py-10 lg:py-10 xl:py-10'>
            <Image src={'11024_nobg.png'} />
          </div>
          <div className='flex flex-col w-full col-span-1 px-5 md:px-20 lg:px-20 xl:px-20 md:hidden lg:hidden xl:hidden  justify-between'>
            <div>
              <h1 className='font-bold text-2xl mt-3 md:text-5xl lg:text-5xl xl:text-5xl z-10'>
                Water Solutions
              </h1>
              <p className='md:mt-10 lg:mt-10 xl:mt-10 mt-2  z-10'>
                The STABFOR unit® is not an ordinary drinking water filter, it
                is not a filter at all. It is a flow-through device that
                comprehensively purifies water throughout the entire household
                and makes it living, clean and healthy without chemicals.
              </p>
            </div>
            <div className='flex w-full justify-end'>
            <button className='flex items-center mb-5 px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md text-white font-semibold gap-x-2 mt-3 md:mt-0 lg:mt-0 xl:mt-0 text-xl'>
                Learn more <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-10 md:py-0 lg:py-0 xl:py-0  '
          id='it_solutions'
        >
          <div className='flex w-full col-span-1 px-5 md:px-0 lg:px-0 xl:px-0 py-0 mix-blend-multiply'>
            <Image src={'msi_it.jpg'} />
          </div>
          <div className='flex flex-col w-full col-span-1 px-5 md:px-20 lg:px-20 xl:px-20 py-0 md:py-10 lg:py-10 xl:py-10 justify-between'>
            <div>

           
            <h1 className='font-bold text-2xl mt-3 md:text-5xl lg:text-5xl xl:text-5xl'>
              IT Solutions
            </h1>
            <p className='md:mt-10 lg:mt-10 xl:mt-10 mt-2 '>
              MSI has more than 30 years`&apos; of experience in motherboard
              design & manufacturing, ranked among the world`&apos;s top 3
              largest motherboard manufacturers, recognized internationally for
              high quality and stability by clients and individual users.
            </p>
            </div>
            <div className='flex w-full justify-end'>
              <button className='flex items-center mb-5 px-4 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md text-white font-semibold gap-x-2 mt-3 md:mt-0 lg:mt-0 xl:mt-0 text-xl'>
                Learn more <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
