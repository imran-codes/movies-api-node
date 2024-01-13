const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

// ROUTE imports
const home = require("./routes/home");
const movies = require("./routes/movieRoutes");

// Middleware
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// convert incoming data to JSON
app.use(express.json());
// serve static files
app.use(express.static("public"));
// enable cors
app.use(cors());
// set security headers
app.use(helmet());
// compress all responses
app.use(compression());

// Routes
app.use("/api", movies);
app.use(home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
