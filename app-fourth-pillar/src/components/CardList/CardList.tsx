import { useEffect, useState } from 'react';

import { request } from '../../services/postsService';

import ServiceCards from './ServiceCards';
import ClientCards from './ClientCards';
import NewsCards from './NewsCards';

import { _URL_SERVICE } from '../../constants/apiUrl';
import { _URL_CLIENTS } from '../../constants/apiUrl';
import { _URL_TEXT } from '../../constants/apiUrl';

import styles from './CardList.module.scss';

interface ICardsList {
  type: string;
  titleSection?: string;
  limit?: number;
  loadMore?: boolean;
}

const CardsList = ({ type, titleSection, limit = 3, loadMore }: ICardsList) => {

  const [posts, setPosts] = useState([]);
  
  let url: string = '';

  const setContent = (type: string) => {
    switch (type) {
      case 'serviceCards':
        url = _URL_SERVICE;
        return <ServiceCards posts={posts} />;
      case 'newsCards':
        url = _URL_TEXT;
        return <NewsCards posts={posts} limit={limit} loadMore={loadMore} />;
      case 'clientCards':
        url = _URL_CLIENTS;
        return <ClientCards posts={posts}/>;
      default:
        throw new Error('Unexpected process state');
    }
  }

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line 
  }, []);
  
  const onRequest = () => {
    request(`${url}?_limit=${limit}`)
      .then(response => setPosts(response))
      .catch(error => console.error(error));
  }

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