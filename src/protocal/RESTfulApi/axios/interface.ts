export interface ResObject {
  data: any;
  status: Status;
}
export interface Status {
  code: string;
  details: Array<string>;
  emessage: string;
  err: number;
  message: string;
  time?: string;
  traceID?: string;
  unix?: number;
}

export interface AnyObject {
  [key: string]: any;
}
