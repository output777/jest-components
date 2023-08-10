import Layout from "@/components/Common/Layout";
import FooterContent from "@/components/Footer/FooterContent";
import HeaderContent from "@/components/Header/HeaderContent";
import NavbarContent from "@/components/Navbar/NavbarContent";
import SidebarContent from "@/components/Sidebar/SidebarContent";
import Head from "next/head";
import React from "react";

export default function contentPage() {
  return (
    <>
      <Head>
        <title>components | content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        HeaderContentComponent={<HeaderContent />}
        NavbarContentComponent={<NavbarContent />}
        SidebarContentComponent={<SidebarContent />}
        FooterContentComponent={<FooterContent />}
      >
        <div className="p-4">Content Page</div>
      </Layout>
    </>
  );
}
