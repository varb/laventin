import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { GlobalStyle, PageLayout, PageWrap } from './styles';

function Layout() {
  return (
    <PageLayout>
      <GlobalStyle />
      <Header />
      <Outlet />
      <PageWrap>
        <Footer />
      </PageWrap>
    </PageLayout>
  )
}

export default Layout;
