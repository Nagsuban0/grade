const CLIENT_ID = "YOUR_GOOGLE_API_CLIENT_ID";  // Your client ID
const API_KEY = "YOUR_GOOGLE_API_KEY";  // Your API Key
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";  // Your Google Sheet ID

// Initialize Google API Client
function start() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(() => {
        console.log("Google API Initialized");
    });
}

gapi.load("client:auth2", start);

// Register Form Submit
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;
    const studentNumber = document.getElementById("studentNumber").value;
    const qrCode = document.getElementById("qrCode").value;

    register(username, password, fullName, studentNumber, qrCode);
});

// Login Form Submit
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    login(username, password);
});

// Register Function
function register(username, password, fullName, studentNumber, qrCode) {
    google.script.run.withSuccessHandler(function(response) {
        document.getElementById("register-message").innerHTML = response;
    }).register(username, password, fullName, studentNumber, qrCode);
}

// Login Function
function login(username, password) {
    google.script.run.withSuccessHandler(function(response) {
        document.getElementById("login-message").innerHTML = response;
    }).login(username, password);
}
