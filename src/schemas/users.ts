export interface User {
  id: number;
  name: string;
  age: number;
  interactions: number;
  discarted: number;
  email: string;
  password: string;
}

export type UserData = {
  name: string;
  email: string;
  phone: string;
  age: number;
  discarted: number; // em kg
};
