
import { IImage } from "../../types";

import styles from "./Hero.module.scss"

export interface HeroProps {
  title: string;
  text?: string;
  maps?: IImage;
  mail?: string;
  address?: string;
  heroImg?: IImage;
}

interface IHero extends HeroProps {
  optionClass?: string;
  children?: React.ReactNode;
}

const Hero = ({ children, optionClass, title, text, maps, address, mail, heroImg }: IHero) => {
  const Maps = () => {
    return (
      <div className={styles.imgMaps}>
        <img src={maps?.src} alt={maps?.alt} />
      </div>
    )
  }

  const HeroImg = () => {
    return (
      <div className={styles.heroImages}>
        <img src={heroImg?.src} alt={heroImg?.alt} />
      </div>
    )
  }

  return (
    <section className={
      optionClass
        ? `${styles.heroSection} ${styles[optionClass]}`
        : `${styles.heroSection}`
    }>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h1 className={styles.fzSm}>{title}</h1>
          {text ? <p>{text}</p> : null}
          {mail ? <span className={styles.mail}><a href={`mailto:${mail}`}>{mail}</a></span> : null}
          {address ? <address>{address}</address> : null}
          {children}
        </div>
        {maps ? <Maps /> : null}
        {heroImg ? <HeroImg /> : null}
      </div>
    </section>
  )
}

export default Hero;