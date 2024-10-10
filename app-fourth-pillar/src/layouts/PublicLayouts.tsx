import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { headerData } from '../mocks/header';
import { footerData } from '../mocks/footer'; 

const PublicLayouts = () => {

  return (
    <>
      <Header
        logoData={headerData.logoData}
        menuItems={headerData.menuItems}
        addMenuItems={headerData.addMenuItems}
      />
      <Outlet />
      <Footer
        logoData={footerData.logoData}
        contactInfo={footerData.contactInfo}
        footerMenu={footerData.footerMenu}
        servicesMenu={footerData.servicesMenu}
        addFooterMenu={footerData.addFooterMenu}
        socialLinkList={footerData.socialLinkList}
      />
    </>
  )
}

export default PublicLayouts;