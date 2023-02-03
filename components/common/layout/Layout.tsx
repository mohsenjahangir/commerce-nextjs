import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const LayoutT = ({ children }: LayoutProps) => {
  return (
    <div className=" mx-30">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutT;
