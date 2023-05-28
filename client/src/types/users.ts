export interface User {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  hashedRT: string;
  profileImage?: string;
}
