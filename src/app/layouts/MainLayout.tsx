import { Outlet } from "react-router-dom";

import Footer from "widgets/Footer";
import Header from "widgets/Header";
import { Layout } from "shared/ui";

import "./fonts.css";
import GlobalStyle from "./GlobalStyle";

function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Layout.PageWrap>
        <Footer />
      </Layout.PageWrap>
    </>
  );
}

export default MainLayout;
