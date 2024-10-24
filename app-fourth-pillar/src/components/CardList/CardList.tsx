import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ServiceCards from './ServiceCards';
import ClientCards from './ClientCards';
import NewsCards from './NewsCards';

import { fetchServices } from '../../store/slices/serviceSlice';
import { fetchClient } from '../../store/slices/clientSlice';
import { fetchNews } from '../../store/slices/newsSlice';
import { selectServiceList, selectClientList, selectNewsList, selectServiceStatus, selectClientsStatus, selectNewsStatus } from '../../store/selectors';
import { AppDispatch } from '../../store';
import { EServiceSliceStatus } from '../../types/serviceSliceType';
import { EClientSliceStatus } from '../../types/clientSliceType';
import { ENewsSliceStatus } from '../../types/newsSliceType';

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
  const serviceStatus = useSelector(selectServiceStatus);
  const clientStatus = useSelector(selectClientsStatus);
  const newsStatus = useSelector(selectNewsStatus);

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
    if (type === ETypeCards.Service && serviceStatus !== EServiceSliceStatus.Success) {
      dispatch(fetchServices(limit));
    } else if (type === ETypeCards.Client && clientStatus !== EClientSliceStatus.Success) {
      dispatch(fetchClient(limit));
    } else if (type === ETypeCards.News && newsStatus !== ENewsSliceStatus.Success) {
      dispatch(fetchNews(limit));
    }
  }, [dispatch, type, limit, serviceStatus, clientStatus, newsStatus]);

  if (type === ETypeCards.Service && serviceStatus === EServiceSliceStatus.Loading ||
    type === ETypeCards.News && newsStatus === ENewsSliceStatus.Loading ||
    type === ETypeCards.Client && clientStatus === EClientSliceStatus.Loading) {
    return <div className={styles.container}>Loading..</div>;
  }

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