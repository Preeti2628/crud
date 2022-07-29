export interface IBaseUser {
  name: string;
  designation: string;
  skills: string;
  city: string;
}
export interface IUser extends IBaseUser {
  id: number;
}
