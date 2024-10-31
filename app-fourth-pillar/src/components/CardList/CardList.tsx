import styles from './CardList.module.scss'

interface ICardsList {
  children: React.ReactNode
  titleSection?: string
  isLoading?: boolean
}

const CardsList = ({ children, isLoading, titleSection }: ICardsList) => {
  return isLoading ? (
    <div className={styles.container}>Loading..</div>
  ) : (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        {titleSection && <h3>{titleSection}</h3>}
        {children}
      </div>
    </section>
  )
}

export default CardsList
