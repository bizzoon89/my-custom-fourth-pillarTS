import { Link } from 'react-router-dom';

import { IImage } from '../../types';
import { ILink } from '../../types';

import styles from './PeopleCard.module.scss'

export interface PeopleListProps {
  name: string,
  image: IImage;
  link: ILink;
}

const PeopleCard = ({ name, image, link }: PeopleListProps) => {
  return (
    <figure className={styles.peopleCard}>
      <img src={image.src} alt={image.alt} />
      <figcaption>
        <div className={styles.popupCard}>
          <div className={styles.box}>
            <h3>{name}</h3>
            <Link to={link.url} className={styles.more}>{link.text}</Link>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export default PeopleCard;