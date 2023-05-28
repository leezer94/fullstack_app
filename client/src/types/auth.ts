export interface UserInformationType {
  id: number;
  email: string;
  password: string;
  username: { firstName: string; lastName: string };
  profileImage?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthType {
  email: string;
  password: string;
  access_token: string;
  refresh_token: string;
}
