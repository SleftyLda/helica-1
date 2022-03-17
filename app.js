const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

//Data parsing
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contacts", (req,res) => {
    res.render("contact");
});

app.get("/sustainability", (req,res) => {
    res.render("sustainability");
});

app.use(express.json());

app.use(express.urlencoded({
    extended:false
}))

app.listen(5000, () => {
    console.log("Server started on port 5000");
})

// Calendar starts

const {google} = require('googleapis');
require('dotenv').config();

//// Provide the required configuration
// const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
// const calendarId = process.env.CALENDAR_ID;

// // Google calendar API settings
// const SCOPES = 'https://www.googleapis.com/auth/calendar';
// const calendar = google.calendar({version: "v3"});

// const auth = new google.auth.JWT(
//         CREDENTIALS.client_email,
//         null,
//         CREDENTIALS.private_key,
//         SCOPES
// );

// // Insert new event to Google Calendar
// const insertEvent = async (event) => {
//     try {
//         let response = await calendar.events.insert({
//             auth: auth,
//             calendarId: calendarId,
//             resource: event
//         });

//         if (response['status'] == 200 && response['statusText'] === 'OK') {
//             return 1;
//         } else {
//             return 0;
//         }
//     } catch (error) {
//         console.log(`Error at insertEvent --> ${error}`);
//         return 0;
//     }
// };

// // The event
// var event = {
// 	'summary': 'Plantação de árvores - Helica',
// 	'location': 'Tomar',
// 	'description': 'Primeiro evento comunitário de plantação de árvores com a Helica!',
// 	'start': {
// 	'dateTime': '2022-06-05T09:00:00+00:00',
// 	'timeZone': 'Europe/London',
// 	},
// 	'end': {
// 	'dateTime': '2022-06-05T13:00:00+00:00',
// 	'timeZone': 'Europe/London',
// 	},
// 	'attendees': [],
// 	'reminders': {
// 	'useDefault': false,
// 	'overrides': [
// 		{'method': 'email', 'minutes': 24 * 60},
// 		{'method': 'popup', 'minutes': 10},
// 	],
// 	},
// };

// insertEvent(event)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


