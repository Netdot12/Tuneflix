const admin = require('firebase-admin');
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Initialize Firebase Admin SDK with environment variables
admin.initializeApp({
    credential: admin.credential.cert({
  "type": "service_account",
  "project_id": "tuneflix-ea9b8",
  "private_key_id": "2ac779dabe7919821886716843d0489b480fb638",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDv4Bkl6nDkqHnT\nD50SqtZsCuwjKA6UusKY4+mLd3PqSWjyk6Mnw7V2utZphfF8XHscDfG0q6eTnGnT\nKuytfbOmSowf4Hti2dPXqh3HV0445khlJQIS5Re1KoWNyF0jQl0wjRBw/BQBJNMH\nbn+cUcrh00joiGFCGf3qCpYPPN5HV5MCUeRO7YZ4hnsRh7FUFM5p5myKcIbR0MkP\nKI/XT+jylxrysSmSbLiXyIrC7hB0axcAsCK3tcQPNojEfqq8q9uVHNY0d1f0BcDT\nFdu6y7OT5b8xtig3QWJl7PT9uotMm0shqzpbsXPrHhbxQcxkVsHVnLUjOX0eZc5f\nYslOpueBAgMBAAECggEANW8/SuHxqg4ZrTmSLOFfiIvaVG6M6Pa9eJ90m/vNF4io\n1ziqJKaFGuC9+J280I4tYm98w1llqA00ybSLKo6Q4V9D3an88mVBuo4LuicppqUt\nxVI8Jwdfg5zoSVAz5zHWXoVd/z04G5UfaU1lIeZagnm1iQ8wUzBFDsiy6swNW+io\n0A3xem4IkA9Yg5j7hAY8UWlRPxOVotF3IxitQiOkSHnVH+xjUJN63bfAC3bqVHBo\nOibe7F5S5li/QS3kYjNERoxXObmWolSnFmh/GAOUQUdBIox/kZOKor2WMkh8TsJ3\nwB/1aFNJa99V0ATmRCFoTTsK6ORzJt6+QvMmPTJRTQKBgQD4/ZJ37YnKSkzOBspW\nxtouOP12ORQHz1J5HBXVdtppvIShm85I2bLbZkk9Eqi0ezSIqfRzQiEG7kwA9708\nSXv1W4ZU1Ej+CR/c7T1cstcuLvwLmqTv43Y58u88XUP+M9Bxm+LVJCQL0l7JH0J3\nUdd1ZKXzxel5+BqhCIkI4L+zCwKBgQD2oNXFjyXsOd7VDw/tGGUJub7ZGMuAJHmv\nCM2G5VykS+/UuIy41D4kyYBTHuuZUuTdPQ89j/evxbhwTbnqmWum2uc5mhqZm5SE\ntuAiA5yy5rOLePKi2pYuAMLkEHwv7Tz/G7LMxsCP3UD3c7be73eXzCRly6glCj0g\n/+uQezhnIwKBgEQc2dyE1pTIDoqtwNxMOZM7c9rLcndQd7c5v59NjCIwt/edr6iu\nJQdvy8kxOYVlztEz7PM6u94xggkhvFqpn4dXKkA6cl1MEbNWEtsw8TxpDfn+q/AT\nwVvI4TkaKmd3tSXfBwZXhKTXP6a1LnGFqfMrPVqaYWxEOsSimRocoVRRAoGAVieN\nRfxhtQnqS+d9GshA04rtno1I2bTkRT7//TW2jTZxy4/EqPSL2PIDQAY3K1KH3Llt\nz4WxctfRPHoKjmeV8a3axIaO8EYnNc1ksr0sSlrJMdnIeRd/Cwb9DgqsN1naywt0\nBJERx6/09/yWT367+m038c+ZJ4dSH2sHcWt6Ip0CgYEA5upL0fpWMYeTDyqGzkZ7\nHg3pmEj5dO1D0I3nOyJ5kXdOlBXRCHFZ0NAopNf9KnlC+EKJsYvoh9MhgwYIdiRW\nBUTVcVKf2+ViGKHfnb5PISVVI15JppS0YS/cABC61wupBn2HdEPhtYjYs2eDPNeS\nGOhCyXmecOY4Ms8LZ3vRTWY=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-q9rni@tuneflix-ea9b8.iam.gserviceaccount.com",
  "client_id": "100336174921047863024",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q9rni%40tuneflix-ea9b8.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
})
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

// Serve the index.html file from the 'public' directory
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
