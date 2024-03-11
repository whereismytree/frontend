import { ReactNode } from 'react';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import * as S from './style';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Topbar>{null}</Topbar>
      <S.Wrapper>{children}</S.Wrapper>
      <Navbar />
    </>
  );
};

export default Layout;
