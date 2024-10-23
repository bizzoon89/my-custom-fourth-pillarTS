
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Post from '../components/Post';
import SocialNetworks from '../components/SocialNetworks';
import NavPost from '../components/NavPost';
import CardList from '../components/CardList';
import { request } from '../services/getPosts';

import { _URL_SERVICE, _URL_TEXT } from '../constants/apiUrl';

import { IServiceCards } from '../components/CardList/ServiceCards/ServiceCards';
import { INewsCards } from '../components/CardList/NewsCards/NewsCards';

import { socialLinkData } from '../mocks/single-post';

interface ISinglePost {
  postType: 'services' | 'news';
}

const SinglePost = ({ postType }: ISinglePost) => {
  const { idPost } = useParams<{ idPost: string }>();

  const [posts, setPosts] = useState<IServiceCards[] | INewsCards[]>([]);

  const getUrlByType = (type: string): string => {
    switch (type) {
      case 'services':
        return _URL_SERVICE;
      case 'news':
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
        {postType === 'news'
          ? <SocialNetworks
            contentPosition={true}
            socialLinkList={socialLinkData}
            />
          : null
        }
      </Post>
      <NavPost postType={postType} arrLength={posts.length} />
      {
        postType ==='news'
        ? <CardList
          titleSection={'Articles'}
          type={'newsCards'}
          loadMore={false}
        />
        : null
      }
    </main>
  )
}

export default SinglePost;