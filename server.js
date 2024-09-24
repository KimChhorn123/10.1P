const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sgMail = require('@sendgrid/mail'); // Keep this line
const cors = require('cors'); // Import CORS

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
require('dotenv').config(); 

// Use CORS middleware
app.use(cors({ origin: 'http://localhost:3001' })); // Enable CORS for all routes

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to parse URL-encoded bodies (form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/signin', async (req, res) => {
    // Extract form data from the request body
    const { firstName, lastName, email } = req.body;

    // Create email message object
    const msg = {
        to: email,
        from: 'sokleurkimchhorn@gmail.com',
        subject: 'Welcome to DEV@Deakin',
        text: `Hello ${firstName} ${lastName}, welcome to DEV@Deakin platform!`
    };

    // Try to send the email using SendGrid
    try {
        await sgMail.send(msg); // Send email
        res.send('Sign In successful! Check your email for a welcome message.'); // Respond to client
    } catch (error) {
        console.error(error); // Log any errors
        if (error.response) {
            console.error(error.response.body); // Log detailed error response from SendGrid
        }
        res.status(500).send('There was an error sending the email.'); // Respond with error
    }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
