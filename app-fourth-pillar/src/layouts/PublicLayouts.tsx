import { Outlet } from 'react-router-dom';

import { ScrollToTop } from '../components/ScrollToTop';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { headerData } from '../mocks/header';
import { footerData } from '../mocks/footer';

export const PublicLayouts = () => {

  const { logoData, menuItems, addMenuItems } = headerData;
  const { logoData: logoDataFooter, contactInfo, footerMenu, servicesMenu, addFooterMenu, socialLinkList } = footerData;

  return (
    <>
      <ScrollToTop />
      <Header
        logoData={logoData}
        menuItems={menuItems}
        addMenuItems={addMenuItems}
      />
      <main className="main">
        <Outlet />
      </main>
      <Footer
        logoData={logoDataFooter}
        contactInfo={contactInfo}
        footerMenu={footerMenu}
        servicesMenu={servicesMenu}
        addFooterMenu={addFooterMenu}
        socialLinkList={socialLinkList}
      />
    </>
  );
};
