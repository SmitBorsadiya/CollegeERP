import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Welcome to college ERP API");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});