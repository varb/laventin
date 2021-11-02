import React from 'react';
import Footer from '../Footer';
import { GlobalStyle, PageLayout, PageWrap } from './styles';

function Layout(props) {
  return (
    <PageLayout>
      <GlobalStyle />
      {props.children}
      <PageWrap>
        <Footer />
      </PageWrap>
    </PageLayout>
  )
}

export default Layout;
