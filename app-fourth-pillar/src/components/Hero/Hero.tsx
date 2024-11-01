import { IImage } from '../../types';
import { IPerson } from '../../pages/Founders';

import styles from './Hero.module.scss';

export interface HeroProps {
  title: string;
  text?: string;
  maps?: IImage;
  mail?: string;
  address?: string;
  heroImg?: IImage;
  heroPerson?: IPerson;
}

interface IHero extends HeroProps {
  optionClass?: string;
  children?: React.ReactNode;
}

export const Hero = ({ children, optionClass, title, text, maps, address, mail, heroImg, heroPerson }: IHero) => {
  return (
    <section className={optionClass ? `${styles.heroSection} ${styles[optionClass]}` : `${styles.heroSection}`}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h1 className={styles.fzSm}>{title}</h1>
          {text ? <p>{text}</p> : null}
          {mail ? (
            <span className={styles.mail}>
              <a href={`mailto:${mail}`}>{mail}</a>
            </span>
          ) : null}
          {address ? <address>{address}</address> : null}
          {heroPerson ? (
            <>
              <strong className={styles.name}>{heroPerson.name}</strong>
              <strong className={styles.pos}>{heroPerson.position}</strong>
            </>
          ) : null}
          {children}
        </div>
        {maps ? (
          <div className={styles.imgMaps}>
            <img
              src={maps?.src}
              alt={maps?.alt}
            />
          </div>
        ) : null}
        {heroImg ? (
          <div className={styles.heroImages}>
            <img
              src={heroImg?.src}
              alt={heroImg?.alt}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};