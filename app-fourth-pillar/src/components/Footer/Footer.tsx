import Logo from "../Logo";
import FooterArea from "../FooterArea";
import LinkList from "../LinkList";

import { ILogo } from "../Logo/Logo";
import { IContactInfo } from "../FooterArea/FooterArea";
import { ILink } from "../../types";

//import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.scss";

interface IAddMenu {
  title: string;
  menuItems: ILink[];
}

export interface FooterProps {
  logoData: ILogo;
  contactInfo: IContactInfo;
  footerMenu: ILink[];
  servicesMenu: IAddMenu;
  addFooterMenu: IAddMenu;
  // socialLinkList: SocialLinksData[]; // TODO: Add social media icons and links
}

const Footer = ({ logoData, contactInfo, footerMenu, servicesMenu, addFooterMenu }: FooterProps) => {

  // const socialLinkList = [
  //   {
  //     name: 'instagram',
  //     link: 'https://www.instagram.com/fourthpillarco',
  //     //icon: 'https://'
  //     icon: `${instagramImg}`
  //   },
  //   {
  //     name: 'linkedin',
  //     link: 'https://www.linkedin.com/company/the-fourth-pillar',
  //     //icon: 'https://'
  //     icon: `${linkedinImg}`
  //   }
  // ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerArea}>
          <Logo {...logoData} />
          <FooterArea  {...contactInfo} >
            test  
          </FooterArea>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.col}>
            <h6>{servicesMenu.title}</h6>
            <LinkList
              classList={styles.listLink}
              linkItem={servicesMenu.menuItems}
            />
          </div>
          <div className={styles.col}>
            <LinkList
              classList={styles.addNav}
              linkItem={footerMenu}
            />
            {/* {
              footerMenu.map((menuItem, index) => (
                <div key={index}>
                  <h6>{menuItem.title}</h6>
                  <LinkList classList={'listLink'}>
                    {menuItem.menuItems.map(item => (
                      <LinkItem key={uuidv4()} toLink={item.link}>
                        {item.text}
                      </LinkItem>
                    ))}
                  </LinkList>
                </div>
              ))}
            } */}
          </div>
          <div className={styles.col}>
            <h6>{addFooterMenu.title}</h6>
            <LinkList
              classList={styles.listLink}
              linkItem={addFooterMenu.menuItems}
            />
          </div>
        </div>
      </div>
    </footer>
    // <footer className="footer">
    //   <div className="container">
    //     <div className="footer-area">
    //      
    //       <FooterArea
    //         text={'Registered address:'}
    //         address={'303 The Pill Box \n 115 Coventry Road London \n E2 6GH, United Kingdom.'}
    //         title={'Follow us'}
    //         copyright={'© The Fourth Pillar'}
    //       >
    //         <SocialLinks socialLinkList={socialLinkList} />
    //       </FooterArea>
    //     </div>
    //   </div>
    // </footer>
  )
}

export default Footer;

