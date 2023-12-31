import { Picture } from "./picture";

export interface Author {
    id: string;
    attributes: {
        Name: string;
        Title: string;
        Description: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        Picture: {
            data: Picture;
        };
    };
    Picture: {
        data: Picture;
    };
    Title?: string;
    Name?: string;
    email?: string;
    Description?: string;
    Description_Long?: string;

}