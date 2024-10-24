import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store';
import { fetchNews } from '../../store/slices/newsSlice';
import { selectNewsList, selectNewsStatus } from '../../store/selectors';
import { ENewsSliceStatus } from '../../types/newsSliceType';

import styles from './SingleNews.module.scss';

const SingleNews = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const newsList = useSelector(selectNewsList);
  const newsStatus = useSelector(selectNewsStatus);

  useEffect(() => {
    if (newsStatus !== ENewsSliceStatus.Success) {
      dispatch(fetchNews());
    }
  }, [dispatch, newsStatus]);

  const newsPostIndex: number = Math.floor(Math.random() * newsList.length);
  const newsPostElement = newsList[newsPostIndex];

  if (!newsPostElement) {
    return null;
  }

  const { id, title, publishedAt, content } = newsPostElement;

  return (
    <section className={styles.singleArticleSection}>
      <div className={styles.container}>
        <article className={styles.newsCard}>
          <div className={styles.textCardTxt}>
            <span className={styles.textCardDate}>{publishedAt}</span>
            <h3>{title}</h3>
            <p>{content}</p>
            <Link
              to={`/news/${id}`}
              className={styles.linkMore}
            >
              READ ALL
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SingleNews;
