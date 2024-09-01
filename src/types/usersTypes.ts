export type UserKeys = "name" | "username" | "email" | "phone";

export type UserParams = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UserColumnParams = {
  id: UserKeys;
  name: string;
};
