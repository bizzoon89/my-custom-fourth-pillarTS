import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { request } from '../../services/getPosts';
import { INewsCards } from '../../types/newsSliceType';

import { _URL_TEXT } from '../../constants/apiUrl';
import styles from './SingleNews.module.scss';

const SingleNews = () => {

  const [newsPostList, setNewPostList] = useState<INewsCards[]>([]);

  useEffect(() => {
    onRequest(_URL_TEXT);
  }, [])
  
  const onRequest = (url: string) => {
    request(url)
      .then(response => setNewPostList(response))
      .catch(error => console.error(error));
  }

  const newsPostIndex: number = Math.floor(Math.random() * newsPostList.length);
  const newsPostElement = newsPostList[newsPostIndex];
  
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
            <Link to={`/news/${id}`} className={styles.linkMore}>READ ALL</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SingleNews;
