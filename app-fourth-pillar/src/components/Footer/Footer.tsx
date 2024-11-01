//import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { FooterArea } from '../FooterArea';
import { LinkList } from '../LinkList';
import { SocialNetworks } from '../SocialNetworks';

import { ILogo } from '../Logo/Logo';
import { IContactInfo } from '../FooterArea/FooterArea';
import { ILink } from '../../types';
import { ISocialLinks } from '../SocialNetworks/SocialNetworks';

import { useService } from '../../hooks/useService';

import styles from './Footer.module.scss';

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
  socialLinkList: ISocialLinks[];
}

export const Footer = ({ logoData, contactInfo, footerMenu, servicesMenu, addFooterMenu, socialLinkList }: FooterProps) => {
  const { serviceList } = useService();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerArea}>
          <Logo
            {...logoData}
            positionFooter={true}
          />
          <FooterArea {...contactInfo}>
            <SocialNetworks socialLinkList={socialLinkList} />
          </FooterArea>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.col}>
            <h6>{servicesMenu.title}</h6>
            <ul className={styles.listLink}>
              {serviceList.map(item => (
                <li key={uuidv4()}>
                  <Link to={`/services/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <LinkList
              classList={styles.addNav}
              linkItem={footerMenu}
            />
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
  );
};