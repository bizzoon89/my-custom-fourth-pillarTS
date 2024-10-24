import Button from '../Button';
import styles from './JoinBox.module.scss';

export interface JoinBoxProps {
  title: string;
  url: string;
  buttonText: string;
}

interface IJoinBox extends JoinBoxProps {
  align?: string;
  buttonColor: string;
}

const JoinBox = ({ title, align, url, buttonText, buttonColor }: IJoinBox) => {
  return (
    <section className={
      align
        ? `${styles.joinSection} ${styles[align]}`
        : `${styles.joinSection}`}
    >
      <div className={styles.container}>
        <h3>{title}</h3>
        <Button
          url={url}
          buttonText={buttonText}
          buttonColor={buttonColor}
        />
      </div>
    </section>
  );
};

export default JoinBox;
