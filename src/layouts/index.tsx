import { Navbar, Footer } from "@/components";
import { data } from "@/components/Footer/data";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer data={data.data} />
    </>
  );
}
