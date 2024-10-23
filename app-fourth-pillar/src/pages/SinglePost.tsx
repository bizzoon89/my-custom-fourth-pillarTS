
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Post from '../components/Post';
import SocialNetworks from '../components/SocialNetworks';
import NavPost from '../components/NavPost';
import CardList from '../components/CardList';
import { request } from '../services/getPosts';

import { _URL_SERVICE, _URL_TEXT } from '../constants/apiUrl';

import { IServiceCards } from '../types/serviceSliceType';
import { INewsCards } from '../types/newsSliceType';

import { ETypeCards } from '../types';

import { socialLinkData } from '../mocks/single-post';

interface ISinglePost {
  postType: ETypeCards;
}

const SinglePost = ({ postType }: ISinglePost) => {
  const { idPost } = useParams<{ idPost: string }>();

  const [posts, setPosts] = useState<IServiceCards[] | INewsCards[]>([]);

  const getUrlByType = (type: string): string => {
    switch (type) {
      case ETypeCards.Service:
        return _URL_SERVICE;
      case ETypeCards.News:
        return _URL_TEXT;
      default:
        throw new Error('Unexpected post type');
    }
  };

  const onRequest = (url: string) => {
    request(url)
      .then(response => setPosts(response))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    const url = getUrlByType(postType);
    onRequest(url);
  }, [idPost, postType]);
  
  const post = posts.find(p => p.id === Number(idPost));
  
  if (!post) {
    return null;
  }

  return (
    <main className='main' id='main'>
      <Hero
        title={post.title}
      />
      <Post post={post} >
        {postType === ETypeCards.News
          ? <SocialNetworks
            contentPosition={true}
            socialLinkList={socialLinkData}
            />
          : null
        }
      </Post>
      <NavPost postType={postType} arrLength={posts.length} />
      {
        postType === ETypeCards.News
        ? <CardList
          titleSection={'Articles'}
            type={ETypeCards.News}
          loadMore={false}
        />
        : null
      }
    </main>
  )
}

export default SinglePost;