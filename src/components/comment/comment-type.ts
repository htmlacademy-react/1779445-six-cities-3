type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type CommentsType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
