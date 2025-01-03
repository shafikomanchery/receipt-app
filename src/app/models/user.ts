export interface User {
  id: number;
  username: string;
  password: string;
  emailAddress: string;
  createdDate: string;
  status: Status;
}

export interface UserProfile {
  id: number;
  userId: number;
  registerno: string;
  firstname: string;
  lastname: string;
  gender: Gender,
  homeaddress: string;
  altAddress: string;
  phone: number;
  mobile: number;
  role: UserRole;
  profile: string;
  createdDate: string;
  updatedDate: string;
  status: UserStatus;
}

export interface UserAccount {
  id: string;
  userId: number;
  accountId: number;
  status: Status;
}

export enum UserStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    PENDING_VERIFICATION = 'PendingVerification',
    BLOCKED = 'Blocked',
    DELETED = 'Deleted'
}

export enum Status {
  ACTIVE= 'Active',
  INACTIVE = 'Inactive'
}

export enum Gender {
  MALE='Male',
  FEMALE='Female',
}

export enum UserRole{
  ADMIN='admin',
  GROUPADMIN='GroupAdmin',
  MEMBER ='member',
  USER='user'
}
