const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser'); // To parse POST request data
const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "tuneflix-ea9b8",
        "private_key_id": "3f0123f58fbfa130abab4cebd4ff7667a6e104b7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDJ+8NrzXsWxDDJ\n...",
        "client_email": "firebase-adminsdk-q9rni@tuneflix-ea9b8.iam.gserviceaccount.com",
        "client_id": "100336174921047863024",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q9rni%40tuneflix-ea9b8.iam.gserviceaccount.com"
    })
});

// Route to send notification when the form is submitted
app.post('/send-notification', (req, res) => {
    const { title, body, token } = req.body; // Get title, body, and token from the form

    // Define the notification message dynamically based on form input
    const message = {
        notification: {
            title: title, // Use form title
            body: body,   // Use form body
            image: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Eye_Roll_Emoji_large.png?v=1541768914'
        },
        webpush: {
            fcm_options: {
                link: 'https://google.com'
            }
        },
        token: token // Token from the form
    };

    // Send the notification using Firebase Admin SDK
    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
            res.json({ success: true, response });
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            res.json({ success: false, error });
        });
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
