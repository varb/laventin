import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { GlobalStyle, PageLayout, PageWrap } from './styles';

function Layout() {
  return (
    <PageLayout>
      <GlobalStyle />
      <Outlet />
      <PageWrap>
        <Footer />
      </PageWrap>
    </PageLayout>
  )
}

export default Layout;
