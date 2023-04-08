import { Navbar, Footer } from "@/components";
import { data } from "@/components/Footer/data";
import { IconDropletFilled, IconBuildingCarousel,IconCpu  } from "@tabler/icons-react";

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
          link: "#air_purification",
          icon: IconBuildingCarousel,
          label: "Air Purification",
        },
        {
          link: "#water_solutions",
          icon: IconDropletFilled,
          label: "Water Solutions",
        },
        {
          link: "#it_solutions",
          icon: IconCpu,
          label: "IT Solutions",
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
  return (
    <>
      <Navbar links={navData.links} />
      <main id="home">{children}</main>
      <Footer data={data.data} />
    </>
  );
}
