// // backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const PORT = 3007;

dotenv.config();
const EMAIL_USER = 'lavyabansal16@gmail.com'
const EMAIL_PASS = 'rnnuzxchtgespywk'

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000', // React frontend URL
    methods: ['GET', 'POST'],
    credentials: true
}));

// Handle form submission
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    // Send email
    try {
        let info = await transporter.sendMail({
            from: `"DEV@Deakin" <${EMAIL_USER}>`,
            to: email,
            subject: "Subscription Confirmation",
            html: `<h1>You've successfully subscribed to DEV@Deakin.</h1>`,
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: 'Subscription failed. Please try again.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const app = express();
// const PORT = 3007;
// const cors = require('cors');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.post('/subscribe', async (req, res) => {
//     const email = req.body.email;

//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: "lavyabansal16@gmail.com",
//             pass: "rnnuzxchtgespywk", 
//         },
//     });

//     info = await transporter.sendMail({
//         from: '"DEV@Deakin" <lavyabansal16@gmail.com>',
//         to: email,
        // subject: "Subscription Confirmation",
        // html: `<h1>You've successfully subscribed to DEV@Deakin.</h1>`,
//     });
//     res.send("Subscription successful!");   
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });