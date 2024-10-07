import styles from './InfoText.module.scss';

import { PlainText } from '../../types';

export interface IInfoTextProps {
  title: PlainText;
}

interface IInfoText extends IInfoTextProps {
  children?: React.ReactNode;
}

const InfoText = ({ children, title }: IInfoText) => {
  return (
    <section className={styles.infoTextSection}>
      <div className={styles.containerMd}>
        <h4>{title}</h4>
        {children}
      </div>
    </section>
  )
}

export default InfoText;