import styles from './CardList.module.scss';

interface ICardsList {
  children: React.ReactNode;
  titleSection?: string;
  isLoading?: boolean;
}

export const CardList = ({ children, titleSection, isLoading }: ICardsList) => {
  return isLoading ? (
    <div className={styles.container}>Loading..</div>
  ) : (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        {titleSection && <h3>{titleSection}</h3>}
        {children}
      </div>
    </section>
  );
};