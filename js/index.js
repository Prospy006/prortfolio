const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/trigger", async (req, res) => {
  const { user_code } = req.body;

  try {
    const response = await axios.post(
      "https://api.github.com/repos/Prospy006/prortfolio/actions/workflows/validate-code.yml/dispatches",
      {
        ref: "main",
        inputs: { user_code }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json"
        }
      }
    );

    res.send("✅ Workflow triggered!");
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("❌ Failed to trigger workflow.");
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
