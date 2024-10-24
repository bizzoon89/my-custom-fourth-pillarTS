import AnimatedSquare from '../AnimatedSquare';
import LogoList from '../LogoList/LogoList';
import PeopleCard from '../PeopleCard';

import { PlainText } from '../../types';
import { PeopleListProps } from '../PeopleCard/PeopleCard';
import { LogoListProps } from '../LogoList/LogoList';

import styles from './PeopleBox.module.scss';

export interface PeopleProps {
  title: string;
  paragraphs?: PlainText[];
}

interface IPeopleBox {
  peopleData: PeopleProps;
  peopleListData: PeopleListProps[];
  logoListData: LogoListProps[];
}

const PeopleBox = ({ peopleData: { title, paragraphs }, peopleListData: peopleList, logoListData: logoList }: IPeopleBox) => {
  return (
    <section className={styles.peopleSection}>
      <div className={styles.container}>
        <div className={styles.imageHolder}>
          {peopleList.map((person, index) => (
            <PeopleCard
              key={index}
              {...person}
            />
          ))}
        </div>
        <div className={styles.textArea}>
          <h4>{title}</h4>
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <LogoList logoList={logoList} />
        </div>
        <AnimatedSquare positionClass={'square05'} />
      </div>
    </section>
  );
};

export default PeopleBox;
