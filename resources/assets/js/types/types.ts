
export interface newPostState {
    content: String;
    title: String;
    titleImg: String;
    author: String;
    status: String;
    error: any;
}

export interface uploadedImgsState {
    id: Number,
    data: String,
    title: String,
    extension: String,
    path: String,
    time: Date
}

export interface authState {
    userID: Number,
    email: String,
    token: String,
    error: any
}

export interface blogPostState {
    content: String;
    title: String;
    titleImg: String;
    author: String;
    status: String;
    url: String;
    error: any;
}

export interface postsState {
    posts: blogPostState[]
    error: any;
}