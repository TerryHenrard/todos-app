import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
