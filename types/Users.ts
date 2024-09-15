export interface User {
  id: string;
  body: string;
  author: string;
  title: string;
  date: string;
  comments: PostComment[];
}
export interface PostComment {
  id: string;
  text: string;
  username: string;
}
