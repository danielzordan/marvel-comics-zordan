import { Outlet } from 'react-router-dom';
import { Footer } from '../../pages/Footer';
import { Header } from '../../pages/Header';
import { Content, LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutContainer>
  );
}
