export type PlainText = string;
export type Html = string;
export type InlineHtml = string;

export interface ImageType {
  url: string;
  alt: string;
};

export interface LinkType {
  url: string;
  title: string;
  target: string;
};

export interface LabeledLink {
  link: LinkType;
  label: string;
};

export type IdType = string | number;
