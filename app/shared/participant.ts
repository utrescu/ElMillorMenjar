import { Comment } from "./comments";

export interface Participant {
    id: number;
    name: string;
    image: string;
    description: string;
    comments: Comment[];
}