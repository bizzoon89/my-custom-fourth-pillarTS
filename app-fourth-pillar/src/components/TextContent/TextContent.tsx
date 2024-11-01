import { Html } from '../../types';

import styles from './TextContent.module.scss';

export interface ITextContentProps {
  content: Html;
}

interface ITextContent extends ITextContentProps {
  children?: React.ReactNode;
}

export const TextContent = ({ content, children }: ITextContent) => {
  return (
    <section className={`${styles.contentSection} ${styles.fzBase}`}>
      <div className={styles.containerMd}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {children}
      </div>
    </section>
  );
};
