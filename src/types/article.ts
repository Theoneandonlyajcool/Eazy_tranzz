export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface CategoryInfo {
  name: string;
  count: number;
}
