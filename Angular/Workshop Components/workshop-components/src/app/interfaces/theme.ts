import { IPost } from "./post";
import { IUSer } from "./user";

export interface ITheme {
    themeName: string;
    subscribers: string[];
    userId: IUSer;
    posts:IPost,
    created_at:string,
}