import { Outlet } from "react-router-dom";

import Footer from "widgets/Footer";
import Header from "widgets/Header";
import ModalProvider from "shared/providers/ModalProvider";
import Layout from "shared/ui/Layout";

import "./fonts.css";
import GlobalStyle from "./GlobalStyle";

function MainLayout() {
  return (
    <ModalProvider>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Layout.PageWrap>
        <Footer />
      </Layout.PageWrap>
    </ModalProvider>
  );
}

export default MainLayout;
