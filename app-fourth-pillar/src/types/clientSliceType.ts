export interface IClientCards {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IClientSlice {
  clientList: IClientCards[];
  status: EClientSliceStatus;
}

export enum EClientSliceStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
