import { useParams } from 'react-router-dom';

import { Hero } from '../components/Hero';
import { Post } from '../components/Post';
import { SocialNetworks } from '../components/SocialNetworks';
import { NavPost } from '../components/NavPost';
import { CardList } from '../components/CardList';

import { EServiceSliceStatus } from '../types/serviceSliceType';
import { ENewsSliceStatus } from '../types/newsSliceType';

import { ETypeCards } from '../types';

import { useService } from '../hooks/useService';
import { useNews } from '../hooks/useNews';

import { socialLinkData } from '../mocks/single-post';
import { NewsCards } from '../components/CardList/NewsCards';

interface ISinglePost {
  postType: ETypeCards;
}

const LIMIT = 3;

export const SinglePost = ({ postType }: ISinglePost) => {
  const { idPost } = useParams<{ idPost: string }>();
  const { newsList, newsStatus } = useNews();
  const { serviceList, serviceStatus } = useService();


  const posts = postType === ETypeCards.Service ? serviceList : newsList;

  const post = posts.find(p => p.id === Number(idPost));

  if (
    (postType === ETypeCards.Service && serviceStatus === EServiceSliceStatus.Loading) ||
    (postType === ETypeCards.News && newsStatus === ENewsSliceStatus.Loading)
  ) {
    return <Hero title={'Loading...'} />;
  }

  if (!post) {
    return <Hero title={'Post not found'} />;
  }

  return (
    <>
      <Hero title={post.title} />
      <Post post={post}>
        {postType === ETypeCards.News ? (
          <SocialNetworks
            contentPosition={true}
            socialLinkList={socialLinkData}
          />
        ) : null}
      </Post>
      <NavPost
        postType={postType}
        arrLength={posts.length}
      />
      {postType === ETypeCards.News ? (
        <CardList
          titleSection={'Articles'}
          isLoading={newsStatus === ENewsSliceStatus.Loading}
        >
          <NewsCards
            posts={newsList}
            limit={LIMIT}
            loadMore={false}
          />
        </CardList>
      ) : null}
    </>
  );
};