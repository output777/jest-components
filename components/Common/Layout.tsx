import React, { ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export interface LayoutProps {
  HeaderContentComponent?: ReactElement;
  NavbarContentComponent?: ReactElement;
  SidebarContentComponent?: ReactElement;
  FooterContentComponent?: ReactElement;
  children?: React.ReactElement;
}

function Layout({
  HeaderContentComponent,
  NavbarContentComponent,
  SidebarContentComponent,
  FooterContentComponent,
  children,
}: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header className="bg-blue-500 px-4 flex-none h-14">
        <div className="flex items-center justify-between">
          {HeaderContentComponent}
          <Navbar className="w-5/12 h-14">{NavbarContentComponent}</Navbar>
        </div>
      </Header>

      <main className="bg-green-200 flex-grow">
        <div className="flex">
          <Sidebar className="bg-green-400 h-100% w-64">
            {SidebarContentComponent}
          </Sidebar>
          {children}
        </div>
      </main>

      <Footer className="bg-blue-500 p-4 flex-none h-14">
        {FooterContentComponent}
      </Footer>
    </div>
  );
}

export default Layout;
