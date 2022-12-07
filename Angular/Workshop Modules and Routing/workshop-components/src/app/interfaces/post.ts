import { ITheme } from "./theme"
import { IUSer } from "./user"

export interface IPost{
    
        likes: string[ ],
        _id: string,
        text: string,
        userId: IUSer,
        themeId: ITheme,
        created_at: string,
        updatedAt:  string,
        __v: number,
        
    
}