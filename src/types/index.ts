export type MarcelType = 'default' | 'cooking' | 'hunter' | 'gardener' | 'rose' | 'petanque';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  tags?: string[];
  marcelTip?: string;
  marcelType?: MarcelType;
}

export interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: 'wild-game' | 'braai' | 'provencal';
  servings: number;
  prepTime: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ingredients: string[];
  instructions: string[];
  marcelTip?: string;
  marcelType?: MarcelType;
  videoId?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}
