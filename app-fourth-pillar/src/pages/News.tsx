import Hero from '../components/Hero'
import CardList from '../components/CardList'
import { SingleNews } from '../components/SingleNews'

import { heroData } from '../mocks/news'
import NewsCards from '../components/CardList/NewsCards'
import { ENewsSliceStatus } from '../types/newsSliceType'
import { useNews } from '../hooks/useNews'

const LIMIT = 3

const News = () => {
  const { newsList, newsStatus } = useNews()

  return (
    <>
      <Hero {...heroData} optionClass={'heroNews'} />
      <SingleNews />
      <CardList
        titleSection={'Articles'}
        isLoading={newsStatus === ENewsSliceStatus.Loading}
      >
        <NewsCards posts={newsList} limit={LIMIT} loadMore={true} />
      </CardList>
    </>
  )
}

export default News
