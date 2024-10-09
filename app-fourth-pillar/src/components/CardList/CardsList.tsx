import { onRequest } from "../../services/postsService";
import { useEffect, useState } from 'react';
import { _URL_SERVICE } from "../../constants/apiUrl";
import ServiceCards from "./ServiceCards";

import styles from "./CardsList.module.scss";

interface ICardsList {
  type: string;
  titleSection?: string;
  limit?: number;
}

const CardsList = ({ type, titleSection, limit = 3 }: ICardsList) => {

  const [posts, setPosts] = useState([]);
  
  let url: string = '';

  const setContent = (type: string) => {
    switch (type) {
      case 'serviceCards':
        url = _URL_SERVICE;
        return <ServiceCards posts={posts} />;
        case 'textCards':
          //return <TextCards loadMore={loadMore} />;
          return <p>TextCards</p>;
        case 'clientCards':
          return <p>ClientCards</p>;
          //return <ClientCards />;
      default:
        throw new Error('Unexpected process state');
    }
  }

  useEffect(() => {
    onRequest(`${url}?_limit=${limit}`)
      .then(response => setPosts(response))
      .catch(error => console.error(error));
    // eslint-disable-next-line 
  }, []);

  return (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        {titleSection ? <h3>{titleSection}</h3> : null}
        {setContent(type)}
      </div>
    </section>
  )
}

export default CardsList;