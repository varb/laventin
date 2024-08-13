import { Outlet } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import { Layout } from "shared/ui";
import GlobalStyle from "./GlobalStyle";

function MainLayout() {
  return (
    <Layout.PageLayout>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Layout.PageWrap>
        <Footer />
      </Layout.PageWrap>
    </Layout.PageLayout>
  );
}

export default MainLayout;
