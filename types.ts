
export interface Movie {
  id: number;
  title: string;
  year: number;
  type: 'Película' | 'Serie';
  posterUrl: string;
}

export interface Actor {
  name: string;
  character: string;
  imageUrl: string;
}

export interface Comment {
    id: number;
    username: string;
    avatarUrl: string;
    date: string;
    text: string;
}

export interface DetailData {
    id: number;
    title: string;
    originalTitle: string;
    year: number;
    seasons: number;
    rating: string;
    imdb: number;
    platforms: { name: string; logoUrl: string }[];
    genres: string[];
    description: string;
    posterUrl: string;
    synopsis: string;
    cast: Actor[];
    review: {
        general: string;
        keyPoints: string[];
    };
    technicalDetails: { [key: string]: string };
    comments: Comment[];
}
