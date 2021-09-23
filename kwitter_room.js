const firebaseConfig = {
    apiKey: "AIzaSyCrRG2DrJ9hnP-YNIVkEyBN_kCtVTsGvOY",
    authDomain: "greetingbot-lich.firebaseapp.com",
    projectId: "greetingbot-lich",
    storageBucket: "greetingbot-lich.appspot.com",
    messagingSenderId: "358856375730",
    appId: "1:358856375730:web:a422ead2ea13f5fe8978ab"
  };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();