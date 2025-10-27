import express from "express";
import path from "path";
import { connectToDb } from "./database/db.js";
import { router } from "./routes/contact.route.js";
export const app = express();
export const staticContactFormPath = path.join(
  import.meta.dirname,
  "views",
  "contact.html"
);
export const staticGreetingPath = path.join(
  import.meta.dirname,
  "views",
  "greeting.html"
);

//database connection function
connectToDb();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express routes
app.use(router);

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
});
