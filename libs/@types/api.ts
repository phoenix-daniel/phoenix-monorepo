/**
 * Generic data types for api response
 */
export interface Api {
  requestId: string,
  responseCode: number,
  statusCode: string,
  responseDescription: string,
  channel: string,
  language: string,
  requestTime: string,
  responseTime: string,
  replyMessage: any,
  additionalAttributeList: any
}

export interface ApiWithToken {
  requestId: string,
  responseCode: number,
  statusCode: string,
  responseDescription: string,
  channel: string,
  language: string,
  requestTime: string,
  responseTime: string,
  replyMessage: any,
  additionalAttributeList: any,
  tokenInformation: string
}
