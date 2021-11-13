import { FC } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import s from "./layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={s.root}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
