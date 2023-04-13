import Head from "next/head";
import { Poppins } from "next/font/google";
import { Button } from "@mantine/core";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { HeroImageRight } from "@/components/HeroImageRight";
import Banner from "@/components/Banner";
import EmailBanner from "@/components/EmailBanner";
import Crousels from "@/components/Carousels";
import LogosBanner from "@/components/LogosBanner";
import About from "@/components/About";
import MapBoxComp from "@/components/MapBox";


const inter = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Home() {
 
    return (
      <div className="scroll-smooth">
        <Head>
          <title>Kamptech</title>
          <meta name="description" content="Industry leading company with products for sustainable future" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <main>
          <HeroImageRight />
          <LogosBanner />
          <Crousels />
  
          <About />
          
          
          <EmailBanner />
          
          <MapBoxComp/>
          
        </main>
      </div>
    );
 
  
  
}
