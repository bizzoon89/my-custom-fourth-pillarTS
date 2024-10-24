import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Hero from '../components/Hero';
import Post from '../components/Post';
import SocialNetworks from '../components/SocialNetworks';
import NavPost from '../components/NavPost';
import CardList from '../components/CardList';

import { AppDispatch } from '../store';
import { fetchServices } from '../store/slices/serviceSlice';
import { fetchNews } from '../store/slices/newsSlice';
import { selectServiceList, selectNewsList, selectServiceStatus, selectNewsStatus } from '../store/selectors';

import { EServiceSliceStatus } from '../types/serviceSliceType';
import { ENewsSliceStatus } from '../types/newsSliceType';

import { ETypeCards } from '../types';

import { socialLinkData } from '../mocks/single-post';

interface ISinglePost {
  postType: ETypeCards;
}

const SinglePost = ({ postType }: ISinglePost) => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const newsList = useSelector(selectNewsList);
  const serviceList = useSelector(selectServiceList);
  const serviceStatus = useSelector(selectServiceStatus);
  const newsStatus = useSelector(selectNewsStatus);

  const { idPost } = useParams<{ idPost: string }>();

  useEffect(() => {
    if (postType === ETypeCards.Service && serviceStatus !== EServiceSliceStatus.Success) {
      dispatch(fetchServices());
    } else if (postType === ETypeCards.News && newsStatus !== ENewsSliceStatus.Success) {
      dispatch(fetchNews());
    }
  }, [dispatch, postType, serviceStatus, newsStatus]);

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
      <Post post={post} >
        {postType === ETypeCards.News
          ? <SocialNetworks
            contentPosition={true}
            socialLinkList={socialLinkData}
            />
          : null
        }
      </Post>
      <NavPost
        postType={postType}
        arrLength={posts.length}
      />
      {
        postType === ETypeCards.News
        ? <CardList
          titleSection={'Articles'}
            type={ETypeCards.News}
          loadMore={false}
        />
        : null
      }
    </>
  );
};

export default SinglePost;
