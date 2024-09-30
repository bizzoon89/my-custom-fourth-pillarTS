import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { headerData } from "../mocks/header"; 

const PublicLayouts = () => {

  return (
    <>
      <Header
        logoData={headerData.logoData}
        menuData={headerData.menuData}
        addMenuData={headerData.addMenuData}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default PublicLayouts;