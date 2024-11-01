import { Link } from 'react-router-dom';

import { IServiceCards } from '../../../types/serviceSliceType';

import styles from './ServiceCards.module.scss';

interface IPropsService {
  posts: IServiceCards[];
}

export const ServiceCards = ({ posts }: IPropsService) => {
  return (
    <div className={styles.rowCard}>
      {posts.map(item => (
        <div
          className={styles.servicesCard}
          key={item.id}
        >
          <h5>{item.body}</h5>
          <div className={styles.servicesCardPopup}>
            <strong className={styles.h5}>{item.title}</strong>
            <Link to={`/services/${item.id}`}>Read more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
