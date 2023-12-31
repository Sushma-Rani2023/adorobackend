const express = require("express");
require("dotenv").config();
const route2 = require("./routes/contact");
const route = require("./routes/signup");
const bodyparser = require("body-parser");
const cors = require("cors");
const route3 = require("./routes/info");
const route4 = require("./routes/admin");
const path=require("path")
const app = express();

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors({
 
  origin:"*",
  methods: "GET, POST, PUT, DELETE, FETCH",
  allowedHeaders: "Content-Type, Authorization",
}));
app.use(express.static(path.resolve(__dirname, "public")));
// Routes
app.use("/user", route);
app.use("/mail", route2);
app.use("/brand", route3);
app.use("/admin", route4);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
