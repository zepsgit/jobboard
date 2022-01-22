import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./routes/posts.js"
//configure express
const app = express();
//enable midleware
app.use(cors());
app.use("/posts", postRoutes)//use localhost:5000/posts instead of localhost:5000/
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000
const CONNECTION_URL = 'mongodb+srv://eric:eric@cluster0.dsibg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => app.listen(PORT, () => console.log(`the server is running on port ${PORT}`))).
    catch((err) => console.log(err.message));