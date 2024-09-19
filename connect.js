const admin = require('firebase-admin');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000; // You can use your desired port

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = JSON.parse(fs.readFileSync('pvKey.json', 'utf8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Define the notification message
const message = {
    notification: {
        title: 'Background Message Title',
        body: 'Background message body',
        image: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sunglasses_Emoji.png?2976903553660223024'
    },
    webpush: {
        fcm_options: {
            link: 'https://google.com'
        }
    },
    token: 'dvA3ilo4fM4RMQCuK_ODcc:APA91bGrEqgQ1pI6n_9izYBaoaUQIPnyEeMf6SYkADdAaLNJhOWOHi4qtr2PwhYSjWG_N6cGpfbrcATH2Uz_u6SOi-Hqwp8YQG_WdICbqaGwqk6nFyVu-mx3lTDI5LYwhT35u5iOdvfS'
};

// Route to send notification when the button is clicked
app.post('/send-notification', (req, res) => {
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

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});