import { Html } from '../../types';

import styles from './TextContent.module.scss';

export interface ITextContentProps {
  content: Html;
}

interface ITextContent extends ITextContentProps {
  children?: React.ReactNode;
}

const TextContent = ({ content, children }: ITextContent) => {
  console.log(content);
  
  return (
    <section className={`${styles.contentSection} ${styles.fzBase}`}>
      <div
        className={styles.containerMd}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {children}
      </div>
    </section>
  )
}

export default TextContent;
