import AnimatedSquare from '../AnimatedSquare';

import { IImage } from '../../types';
import { IBlockquote } from '../../types';
import { PlainText } from '../../types';

import styles from './Founder.module.scss';

export interface IFounder {
  image?: IImage;
  title?: string;
  blockquote?: IBlockquote;
  paragraphs?: PlainText[];
}

const Founder = ({ image, title, blockquote, paragraphs }: IFounder) => {
  return (
    <section className={styles.singlePostSection}>
      <div className={styles.container}>
        <figure className={styles.postImg}>
          <img
            src={image?.src}
            alt={image?.alt}
          />
          <AnimatedSquare positionClass={'square06'} />
        </figure>
        <div className={styles.textArea}>
          <h4>{title}</h4>
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <blockquote>
            <p>{blockquote?.text}</p>
            <cite>{blockquote?.author}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Founder;
