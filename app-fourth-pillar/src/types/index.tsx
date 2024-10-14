export type IdType = string | number;
export type PlainText = string;
export type Html = string;
export type InlineHtml = string;

export interface ILink { //i use
  url: string;
  text: string;
};

export interface IImage { //i use
  src: string;
  alt: string;
};

export interface IBlockquote { //i use
  text: string;
  author: string;
};


export interface IIcon { //i use
  src: string;
  alt: string;
  width: number;
  height: number;
};

export interface ILinkTarget {
  url: string;
  title: string;
  target: string;
};

export interface ILabeledLink {
  link: ILink;
  label: string;
};

