export type IdType = string | number;
export type PlainText = string;
export type Html = string;
export type InlineHtml = string;

export interface ILink { //i use
  url: string;
  text: string;
};

export interface IImage { //i use
  img: string;
  alt: string;
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

