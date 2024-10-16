import AnimatedSquare from '../AnimatedSquare';

import styles from './Post.module.scss';

import { IServiceCards } from '../CardList/ServiceCards/ServiceCards';
import { INewsCards } from '../CardList/NewsCards/NewsCards';

interface IPost {
  post: IServiceCards | INewsCards;
  children?: React.ReactNode;
}

const Post = ({ post, children }: IPost) => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.containerMd}>
        <h4>{post.title}</h4>
        <p>{'body' in post ? post.body : post.content}</p>
        {children}
        <AnimatedSquare positionClass={'square03'} />
      </div>
    </section>
  )
}

export default Post;