import { Author } from "./author";
import { Logo } from "./logo";

export interface Event {
    id: string;
    Titel: string;
    Location: string;
    Type: string;
    Date: string;
    Time: string;
    Description: string;
    Price: string;
    SoldOut: string;
    authors: {
        data: [
            attributes: Author[]
        ]
    }

}

