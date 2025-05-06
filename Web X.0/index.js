// Import required modules
const express = require("express"); // Web framework for handling routes and HTTP
const MongoClient = require("mongodb").MongoClient; // MongoDB client to connect to database
const path = require("path"); // Node module to handle file paths

const app = express(); // Initialize express app
const PORT = 3000; // Port where the server will run
const url = "mongodb://localhost:27017"; // MongoDB server URL
const dbname = "customer_details"; // Name of the database

let db; // Variable to store the database connection

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
MongoClient.connect(url)
    .then((client) => {
        db = client.db(dbname); // Store connected DB instance
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.error("MongoDB connection error: ", err));

// Route to serve the main HTML form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html")); // Send HTML form to browser
});

// Route to handle form submission
app.post("/addCustomer", async (req, res) => {
    // Return error if DB is not connected
    if (!db) return res.status(500).send("Database not connected");

    // Create a new user object from form data
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };

    try {
        // Insert the user object into MongoDB collection
        await db.collection('customer_data').insertOne(newUser);
        res.status(201).send({ message: "Customer added successfully!" }); // Send success response
    }
    catch (err) {
        res.status(500).send("Error inserting user: " + err); // Send error response
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
