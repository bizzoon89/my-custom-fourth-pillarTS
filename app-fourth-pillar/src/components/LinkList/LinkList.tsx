import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ILink } from '../../types';

interface ILinkList {
  classList: string;
  linkItem: ILink[];
}

const LinkList = ({ classList, linkItem }: ILinkList) => {
  return (
    <ul className={classList}>
      {linkItem.map(item => (
        <li key={uuidv4()}>
          <Link to={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
