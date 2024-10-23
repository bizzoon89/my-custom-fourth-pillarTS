import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ServiceCards from './ServiceCards';
import ClientCards from './ClientCards';
import NewsCards from './NewsCards';

import { fetchServices } from '../../store/slices/serviceSlice';
import { fetchClient } from '../../store/slices/clientSlice';
import { fetchNews } from '../../store/slices/newsSlice';
import { selectServiceList, selectClientList, selectNewsList  } from '../../store/selectors';
import { AppDispatch } from '../../store';

import { ETypeCards } from '../../types';

import styles from './CardList.module.scss';

interface ICardsList {
  type: ETypeCards;
  titleSection?: string;
  limit?: number;
  loadMore?: boolean;
}

const CardsList = ({ type, titleSection, limit = 3, loadMore }: ICardsList) => {

  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const serviceList = useSelector(selectServiceList);
  const clientList = useSelector(selectClientList);
  const newsList = useSelector(selectNewsList);

  const renderContent = () => {
    switch (type) {
      case ETypeCards.Service:
        return <ServiceCards posts={serviceList} />;
      case ETypeCards.News:
        return <NewsCards posts={newsList} limit={limit} loadMore={loadMore} />;
      case ETypeCards.Client:
        return <ClientCards posts={clientList}/>;
      default:
        return null;
    }
  }

  useEffect(() => {
    if (type === ETypeCards.Service) {
      dispatch(fetchServices(limit));
    } else if (type === ETypeCards.Client) {
      dispatch(fetchClient(limit));
    } else if (type === ETypeCards.News) {
      dispatch(fetchNews(limit));
    }
  }, [dispatch, type, limit]);

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