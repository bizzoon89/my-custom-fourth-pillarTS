import styles from './FooterArea.module.scss';

export interface IContactInfo {
  text: string;
  address: string;
  title: string;
  copyright: string;
}

interface IFooterArea extends IContactInfo {
  children: React.ReactNode;
}

export const FooterArea = ({ text, address, title, copyright, children }: IFooterArea) => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <span className={styles.text}>{text}</span>
      <address className={styles.address}>{address}</address>
      <span className={styles.title}>{title}</span>
      {children}
      <span className={styles.copy}>
        {copyright}
        {year}
      </span>
    </>
  );
};