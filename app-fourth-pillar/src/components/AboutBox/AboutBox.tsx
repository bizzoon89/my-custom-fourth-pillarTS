import AnimatedSquare from '../AnimatedSquare'

import { IImage } from '../../types'
import { PlainText } from '../../types'

import styles from './AboutBox.module.scss'

export interface AboutBoxProps {
  title: string
  image: IImage
  paragraphs?: PlainText[]
}

export const AboutBox = ({ title, image, paragraphs }: AboutBoxProps) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <figure className={styles.imageBox}>
          <img src={image.src} alt={image.alt} />
          <AnimatedSquare positionClass={'square02'} />
        </figure>
        <div className={styles.textArea}>
          <h3>{title}</h3>
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
