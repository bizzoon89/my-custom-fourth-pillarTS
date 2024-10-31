import { Link } from 'react-router-dom'

import styles from './SingleNews.module.scss'
import { useNews } from '../../hooks/useNews'

export const SingleNews = () => {
  const { newsList } = useNews()

  const newsPostIndex: number = Math.floor(Math.random() * newsList.length)
  const newsPostElement = newsList[newsPostIndex]

  const { id, title, publishedAt, content } = newsPostElement

  return newsPostElement ? (
    <section className={styles.singleArticleSection}>
      <div className={styles.container}>
        <article className={styles.newsCard}>
          <div className={styles.textCardTxt}>
            <span className={styles.textCardDate}>{publishedAt}</span>
            <h3>{title}</h3>
            <p>{content}</p>
            <Link to={`/news/${id}`} className={styles.linkMore}>
              READ ALL
            </Link>
          </div>
        </article>
      </div>
    </section>
  ) : null
}
