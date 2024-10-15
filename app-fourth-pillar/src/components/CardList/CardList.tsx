import { useEffect, useState } from 'react';

import { request } from '../../services/postsService';

import ServiceCards from './ServiceCards';
import ClientCards from './ClientCards';
import NewsCards from './NewsCards';

import { _URL_SERVICE, _URL_CLIENTS, _URL_TEXT } from '../../constants/apiUrl';

import styles from './CardList.module.scss';

interface ICardsList {
  type: string;
  titleSection?: string;
  limit?: number;
  loadMore?: boolean;
}

const CardsList = ({ type, titleSection, limit = 3, loadMore }: ICardsList) => {

  const [posts, setPosts] = useState([]);
  
  const getUrlByType = (type: string): string => {
    switch (type) {
      case 'serviceCards':
        return _URL_SERVICE;
      case 'newsCards':
        return _URL_TEXT;
      case 'clientCards':
        return _URL_CLIENTS;
      default:
        throw new Error('Unexpected card type');
    }
  };

  const onRequest = (url: string) => {
    request(`${url}?_limit=${limit}`)
      .then(response => setPosts(response))
      .catch(error => console.error(error));
  }

  const renderContent = () => {
    switch (type) {
      case 'serviceCards':
        return <ServiceCards posts={posts} />;
      case 'newsCards':
        return <NewsCards posts={posts} limit={limit} loadMore={loadMore} />;
      case 'clientCards':
        return <ClientCards posts={posts}/>;
      default:
        throw new Error('Unexpected process state');
    }
  }

  useEffect(() => {
    const url = getUrlByType(type);
    onRequest(url);
    // eslint-disable-next-line 
  }, [type, limit]);

  return (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        {titleSection && <h3>{titleSection}</h3>}
        {renderContent()}
      </div>
    </section>
  )
}

export default CardsList;