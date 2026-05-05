require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "https://career-explorer-xi.vercel.app",
      "http://localhost:5173", // for local development
    ],
    credentials: true,
  })
);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Career Explorer API is running ✅" });
});

// ── Connect to MongoDB & Start Server ────────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
