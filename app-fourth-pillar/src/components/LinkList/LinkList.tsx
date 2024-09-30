
import { Link } from "react-router-dom";

export interface ILinkItem {
  label: string;
  url: string;
}

interface ILinkList {
  classList: string;
  linkData: ILinkItem[];
}

const LinkList = ({ classList, linkData }: ILinkList) => {
  console.log(linkData);
  
  return (
    <ul className={classList}>
      {linkData.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default LinkList;