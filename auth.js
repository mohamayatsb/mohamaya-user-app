// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
            apiKey: "AIzaSyBADes_aelrE2zg7vfBfUahjuzNlHeVjJc",
        authDomain: "mohamaya-user-app.firebaseapp.com",
        projectId: "mohamaya-user-app",
        storageBucket: "mohamaya-user-app.appspot.com",
        messagingSenderId: "1080841164932",
        appId: "1:1080841164932:web:458f0ca9f9158a94f7cad1"
        };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
