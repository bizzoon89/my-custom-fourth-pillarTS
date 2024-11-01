import styles from './InfoText.module.scss';

import { PlainText } from '../../types';

export interface InfoTextProps {
  title: PlainText;
}

interface IInfoText extends InfoTextProps {
  children?: React.ReactNode;
}

export const InfoText = ({ children, title }: IInfoText) => {
  return (
    <section className={styles.infoTextSection}>
      <div className={styles.containerMd}>
        <h4>{title}</h4>
        {children}
      </div>
    </section>
  );
};