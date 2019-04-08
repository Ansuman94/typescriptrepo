export const USER_DETAILS = 'USER_DETAILS';
export const RECEIVED_USER_DETAILS = 'RECEIVED_USER_DETAILS';

export interface getUserDetailsType {
  type: typeof USER_DETAILS,
  userId: string,
  passWord : string,
  payload: {}
}
export interface receivedUserDetailsDataType{
    userid : string,
    role : string
}
export interface receivedUserDetailsType {
    type: typeof RECEIVED_USER_DETAILS,
    payload: receivedUserDetailsDataType
}

export type userDetailsType = getUserDetailsType | receivedUserDetailsType
