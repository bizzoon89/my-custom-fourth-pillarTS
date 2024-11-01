import { v4 as uuidv4 } from 'uuid';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import styles from './BlockquoteSlider.module.scss';
import './customSwiper.scss';

export interface SlideProps {
  text: string;
  author: string;
  position: string;
}

interface ISlide {
  slideData: SlideProps[];
}

export const BlockquoteSlider = ({ slideData }: ISlide) => {
  return (
    <section className={styles.blockquoteSection}>
      <div className={styles.container}>
        <Swiper
          className={styles.blockquoteSlider}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {slideData.map(item => (
            <SwiperSlide key={uuidv4()}>
              <blockquote>
                <p>{item.text}</p>
                <strong className={styles.author}>{item.author}</strong>
                <span className={styles.pos}>{item.position}</span>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
