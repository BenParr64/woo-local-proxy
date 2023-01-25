import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { productRoutes } from "./products/Products";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
// dotenv.config();
const app = express();
app.use(cors());

productRoutes(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("combined"));


app.get("/", (req, res) => {
  res.send("Hey, the API is running 🥳");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the Express API
module.exports = app;