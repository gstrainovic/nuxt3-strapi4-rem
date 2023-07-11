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
  service_details: ServiceDetail;
}

export interface ServiceDetail {
  id: string;
  Title: string;
  Description: string;
  Category: string;
  category_id: string;
}