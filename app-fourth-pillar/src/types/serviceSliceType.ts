export interface IServiceCards {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IServiceSlice {
  serviceList: IServiceCards[];
  status: EServiceSliceStatus;
}

export enum EServiceSliceStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
