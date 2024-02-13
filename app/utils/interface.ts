export interface Post {
    posts: {
        createdAt: string;
        id: string;
        overview: string;
        slug: string;
        title: string;
    }[];
    
}

export interface PostId {
    post: {
        id: string;
        overview: string;
        publishedAt: string;
        slug: string;
        title: string;
        body: any;
        }
}

export interface Project {
    projects: {
        id: string;
        link: string;
        title: string;
        overview: string;
        titleImage: {
            url: string;
        };
        publishedAt: string;
    }[];
}