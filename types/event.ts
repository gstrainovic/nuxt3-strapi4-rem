import { Author } from "./author";
import { Picture } from "./picture";

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
        data: Author[];
    };
    Picture: {
        data: Picture;
      },

}

