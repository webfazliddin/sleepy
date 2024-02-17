export interface ILoginPayload {
  username: string
  password: string
}

export interface ITreatment {
  id?: number
  name: string
  organizationId?: number
}

export interface IPostPatient {
  firstName: string
  lastName: string
  familyName: string
  dateOfBirth: string
  phoneNumber: string
  genderId: number
}

export interface IGetPatient {
  data: any | object
  id?: number
  fullName?: string
  dateOfBirth: string
  phoneNumber: string
  gender?: string
}
export interface ITableActions {
  isView?: boolean;
  isEdit?: boolean;
  isClone?: boolean;
  isDelete?: boolean;
  isHistory?: boolean;
  canAccept?: boolean;
  canCancel?: boolean;
  canDelete?: boolean;
  canApprove?: boolean;
  canSent?: boolean;
  canReject?: boolean;
  canRevoke?: boolean;
}