import Hero from '../components/Hero';
import CardList from '../components/CardList';
import SingleNews from '../components/SingleNews';

import { ETypeCards } from '../types';

import { heroData } from '../mocks/news';

const News = () => {
  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroNews'}
      />
      <SingleNews />
      <CardList
        titleSection={'Articles'}
        type={ETypeCards.News}
        loadMore={true}
      />
    </>
  )
}

export default News;