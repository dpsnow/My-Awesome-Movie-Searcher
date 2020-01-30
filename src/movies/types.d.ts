type ItemPropsT = {
    id?: number;
    title: string;
    overview: string;
    genres: string[];
    posterPath?: string;
};

type ListPropsT = { content: ItemPropsT[] };

type MovieT = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director: string;
    poster_path: string;
    release_date: string;
    isFav?: boolean;
};