export type MarcelType = 'default' | 'cooking' | 'hunter' | 'gardener' | 'rose' | 'petanque' | 'rugby';

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
  hidden?: boolean;
  fr?: {
    title: string;
    excerpt: string;
    content: string;
    marcelTip?: string;
  };
}

export interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  images?: string[];
  date: string;
  category: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ingredients: (string | { text: string; recipeSlug: string })[];
  instructions: string[];
  story?: string;
  notes?: string[];
  marcelTip?: string;
  marcelType?: MarcelType;
  videoId?: string;
  toolIds?: string[];
  relatedRecipes?: string[];
  fr?: {
    title: string;
    excerpt: string;
    story?: string;
    ingredients: string[];
    instructions: string[];
    notes?: string[];
    marcelTip?: string;
  };
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  category: string;
  image?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
