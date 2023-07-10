import { Logo } from "./logo";

export interface Service {
    id: string;
    Title: string;
    Description: string;
    Logo: {
      data: {
        attributes: Logo;
      }
    }
  }