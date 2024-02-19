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
