import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../store';
import { selectNewsList, selectNewsStatus } from '../store/selectors';
import { ENewsSliceStatus } from '../types/newsSliceType';
import { fetchNews } from '../store/slices/newsSlice';

const LIMIT = 3;

export const useNews = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const newsList = useSelector(selectNewsList);
  const newsStatus = useSelector(selectNewsStatus);

  useEffect(() => {
    if (newsStatus !== ENewsSliceStatus.Success) {
      dispatch(fetchNews(LIMIT));
    }
  }, [dispatch, newsStatus]);

  return { newsList, newsStatus };
};
