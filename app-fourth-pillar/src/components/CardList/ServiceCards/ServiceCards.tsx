
import { Link } from "react-router-dom";

import styles from "./ServiceCards.module.scss";

interface IService {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface IProps {
  posts: IService[];
}

const ServiceCards = ({ posts }: IProps) => {
  return (
    <div className={styles.rowCard}>
      {
        posts.map(item => (
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
        )) 
      }
    </div>
  )
}

export default ServiceCards;

