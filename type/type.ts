export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
  likes: number;
  dislikes: number;
}

export interface IReactions {
  likes: number;
  dislikes: number;
}
