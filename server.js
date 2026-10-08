const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Allow the server to receive JSON data
app.use(express.json());

// Load HTML, CSS, JavaScript, and images
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

// Start the server
app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("CULINA MONDE");
    console.log("Website is running!");
    console.log(`http://localhost:${PORT}`);
    console.log("--------------------------------");
});