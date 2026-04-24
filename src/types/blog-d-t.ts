export type IBlogDT = {
  id: number;
  img: string;
  tags: string[];
  tag: string;
  title: string;
  author: string;
  author_name: string;
  author_img?: string;
  author_location?: string;
  desc?: string;
  date: string;
  postboxQuote1?: boolean;
  postboxQuote2?: boolean;
  content?: string;
  description?: string;
  thumbnail_url?: string;
  thumbnail?: string;
  comments_count?: number;
  category_name?: string; // BU SATIRI EKLE
  category?: string; // BU SATIRI EKLE
};
