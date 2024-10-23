export interface INewsCards {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

export interface INewsSlice {
  newsList: INewsCards[];
  status: ENewsSliceStatus;
}

export enum ENewsSliceStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
