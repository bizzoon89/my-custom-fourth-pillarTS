
import { Link } from "react-router-dom";

import { ILink } from "../../types";

interface ILinkList {
  classList: string;
  linkItem: ILink[];
}

const LinkList = ({ classList, linkItem }: ILinkList) => {
  
  return (
    <ul className={classList}>
      {linkItem.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default LinkList;