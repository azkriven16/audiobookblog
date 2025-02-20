export type Author = {
    name: string;
    avatar: string;
    role: string;
};

export type BlogPost = {
    id: number;
    title: string;
    date: string; // ISO date format (YYYY-MM-DD)
    category: string;
    views: number;
    author: Author;
    excerpt: string;
    content: string;
};
