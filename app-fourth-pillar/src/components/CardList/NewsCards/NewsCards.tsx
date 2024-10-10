import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './NewsCards.module.scss';

export interface INewsCards {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

interface IPropsNews {
  posts: INewsCards[];
  limit: number;
  loadMore?: boolean;
}

const NewsCards = ({ posts, limit, loadMore }: IPropsNews) => {

  const addNewCard: number = 3;

  const [countCard, setCountCard] = useState<number>(limit);

  const onLoadCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCountCard(countCard + addNewCard);
  }

  const renderItems = (arr: INewsCards[]) => {
    let i: number = 0;
    const items = arr.map(item => {
      if (++i > countCard) {
        return;
      }
      return (
        <article
          className={styles.newsCard}
          key={item.id}
        >
          <div className={styles.newsCardTxt}>
            <span className={styles.newsCardDate}>{item.publishedAt}</span>
            <h3>{item.title}</h3>
            <Link
              to={`/news/${item.id}`}
              className={styles.linkMore}>
              READ ALL
            </Link>
          </div>
        </article>
      )
    })

    return (
      <div className={styles.rowCard}>
        {items}
      </div>
    )
  }

  return (
    <>
      {renderItems(posts)}
      <div className={styles.textCenter}>
        {loadMore
          ? <a
              href='#'
              className={`${styles.btn} ${styles.btnArrow} ${styles.loadMore}`}
              onClick={onLoadCards}>
              Load more
            </a>
          : null}
      </div>
    </>
  )
}

export default NewsCards;
