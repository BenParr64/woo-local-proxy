

export interface Product {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
  }
  
  export type Products = Product[];
  