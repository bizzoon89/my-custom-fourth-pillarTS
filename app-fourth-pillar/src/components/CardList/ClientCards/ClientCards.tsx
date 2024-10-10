import styles from "./ClientCards.module.scss";

interface IClientCards {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IPropsClient {
  posts: IClientCards[];
}

const ClientCards = ({ posts }: IPropsClient) => {
  return (
    <div className={styles.rowCard}>
      {
        posts.map(item => (
          <article
            className={styles.clientCard}
            key={item.id}
            >
            <figure className={styles.clientCardLogo}>
              <img src={item.thumbnailUrl} width="304" height="304" alt={item.title} />
            </figure>
            <a href={item.url} target="_blank" className={styles.clientCardPopup} rel="noreferrer">
              <strong className={styles.h5}>{item.title}</strong>
            </a>
          </article>
        ))
      }
    </div>
  )
}

export default ClientCards;