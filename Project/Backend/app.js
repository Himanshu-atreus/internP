import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authrouter from "./routes/auth.route.js";
import {updateUser} from "./controllers/user.controller.js";
import verifyToken from "./middleware/verifyToken.js"
const app = express();

//As there is restriction in sharing of content between different domains we need to allow our client web site to 
// interact with our backend
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authrouter);
// VerifyToken is a middleware that does the Authentication of the correct user by the jwtsecretkey via cookies  
app.put('/api/users/:id', verifyToken , updateUser);

app.listen(8800, () => {
  console.log("Server is running!");
});
