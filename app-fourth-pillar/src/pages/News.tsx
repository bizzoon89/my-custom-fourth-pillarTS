import { Hero } from '../components/Hero';
import { CardList } from '../components/CardList';
import { SingleNews } from '../components/SingleNews';
import { NewsCards } from '../components/CardList/NewsCards';

import { useNews } from '../hooks/useNews';
import { ENewsSliceStatus } from '../types/newsSliceType';

import { heroData } from '../mocks/news';

const LIMIT = 3;

export const News = () => {
  const { newsList, newsStatus } = useNews();

  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroNews'}
      />
      <SingleNews />
      <CardList
        titleSection={'Articles'}
        isLoading={newsStatus === ENewsSliceStatus.Loading}
      >
        <NewsCards
          posts={newsList}
          limit={LIMIT}
          loadMore={true}
        />
      </CardList>
    </>
  );
};