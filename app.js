const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const MovieRouter = require("./api/Movie/movie.routes");
const ActorRouter = require("./api/Actor/actor.routes");
const ReviewRouter = require("./api/Review/reveiw.routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("/movies", MovieRouter);
app.use("/actors", ActorRouter);
app.use("/reviews", ReviewRouter);

// Not Found Path
app.use(NotFound);

// Error Handler
app.use(ErrorHandler);

connectDB();
app.listen(process.env.port, () => {
  console.log(`The application is running on localhost:${process.env.port}`);
});
