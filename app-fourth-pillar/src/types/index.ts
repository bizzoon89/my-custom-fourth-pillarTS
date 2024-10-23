export type IdType = string | number;
export type PlainText = string;
export type Html = string;
export type InlineHtml = string;

export interface ILink {
  url: string;
  text: string;
};

export interface IImage {
  src: string;
  alt: string;
};

export interface IBlockquote {
  text: string;
  author: string;
};


export interface IIcon {
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

export enum ETypeCards {
  Service = 'service',
  Client = 'client',
  News = 'news'
}
