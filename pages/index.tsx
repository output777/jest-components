import Head from "next/head";
import Layout from "@/components/Common/Layout";
import HeaderContent from "@/components/Header/HeaderContent";
import FooterContent from "@/components/Footer/FooterContent";
import MainContent from "@/components/Main/MainContent";
import SidebarContent from "@/components/Sidebar/SidebarContent";
import NavbarContent from "@/components/Navbar/NavbarContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>components | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        HeaderContentComponent={<HeaderContent />}
        NavbarContentComponent={<NavbarContent />}
        SidebarContentComponent={<SidebarContent />}
        FooterContentComponent={<FooterContent />}
      >
        <MainContent />
      </Layout>
    </>
  );
}
