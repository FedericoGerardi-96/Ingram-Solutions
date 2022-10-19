import { ReactNode } from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
