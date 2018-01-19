// Store
export interface newPostState {
    text: String;
    title: String;
    titleImg: String;
    author: String;
    status: String;
}

// Model
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
}