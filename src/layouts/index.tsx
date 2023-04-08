import { Navbar, Footer } from "@/components";
import { data } from "@/components/Footer/data";
import { IconDropletFilled, IconBuildingCarousel } from "@tabler/icons-react";

type LayoutProps = {
  children: React.ReactNode;
};
const navData = {
  links: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/pricing",
      label: "Products",
      links: [
        {
          link: "/air",
          icon: IconBuildingCarousel,
          label: "Air solution",
        },
        {
          link: "/water",
          icon: IconDropletFilled,
          label: "Water Solution",
        },
      ],
    },
    {
      link: "/about",
      label: "About us",
    },
    {
      link: "/contact",
      label: "Contact us",
    },
  ],
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar links={navData.links} />
      <main>{children}</main>
      <Footer data={data.data} />
    </>
  );
}
