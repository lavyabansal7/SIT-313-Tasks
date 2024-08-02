const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/subscribe', async (req, res) => {
    const email = req.body.email;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "lavyabansal16@gmail.com",
            pass: "rnnuzxchtgespywk", 
        },
    });

    info = await transporter.sendMail({
        from: '"DEV@Deakin" <lavyabansal16@gmail.com>',
        to: email,
        subject: "Subscription Confirmation",
        html: `<h1>You've successfully subscribed to DEV@Deakin.</h1>`,
    });
    res.send("Subscription successful!");   
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
