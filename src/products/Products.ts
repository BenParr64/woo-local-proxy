import axios from "axios";
import express, { Request, Response } from "express";
import { Products } from "./Products.types";

export function productRoutes(app: express.Application): void {
  // GET /products
  app.get("/products", async (req: Request, res: Response) => {
    const apiEndpoint = `https://cms.staging.kegthat.com/wp-json/wc/v3/products`;

    const response = await axios.get<Products>(apiEndpoint, {
        auth: {
          username: process.env.REACT_APP_WC_CONSUMER_KEY!,
          password: process.env.REACT_APP_WC_CONSUMER_SECRET!,
        }
      });

    // Return a boolean value indicating whether the customer exists
    res.status(200).json(response.data);
  });
}