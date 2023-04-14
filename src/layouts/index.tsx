import { Navbar, Footer } from "@/components";
import { data } from "@/components/Footer/data";
import { IconDropletFilled, IconBuildingCarousel,IconCpu, IconAffiliate  } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const navData = {
  links: [
    {
      link: "#home",
      label: "Home",
    },
    {
      link: "/",
      label: "Products",
      links: [
        {
          link: "#it_solutions",
          icon: IconCpu,
          label: "Gaming Gear",
        },
        {
          link: "#air_purification",
          icon: IconBuildingCarousel,
          label: "Air Purification",
        },
        {
          link: "#iot_solutions",
          icon: IconAffiliate,
          label: "IOT Solutions",
        },
        {
          link: "#water_solutions",
          icon: IconDropletFilled,
          label: "Water Solutions",
        },
        
        
      ],
    },
    {
      link: "#about_us",
      label: "About us",
    },
    {
      link: "#contact_us",
      label: "Contact us",
    },
  ],
};
export default function Layout({ children }: LayoutProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
      {domLoaded ? (<div><Navbar links={navData.links} />
      <main id="home">{children}</main>
      <Footer data={data.data} /></div>) : (<div className="flex flex-col w-full h-screen justify-center items-center">
        <img src="logo.png" alt="logo" className="w-[50px] h-[50px] object-contain" />
        <p className="font-semibold text-2xl">Loading...</p>
      </div>)}
    </>
  );
}
