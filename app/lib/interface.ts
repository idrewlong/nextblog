export interface Post {
  title: string;
  overview: string;
  body: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
