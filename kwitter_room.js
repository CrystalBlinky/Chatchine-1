
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDNqNpziZAt4C91Fd9HSTVJ9yrxwXTFeCA",
      authDomain: "kwitter-database-5ab9f.firebaseapp.com",
      databaseURL: "https://kwitter-database-5ab9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-5ab9f",
      storageBucket: "kwitter-database-5ab9f.appspot.com",
      messagingSenderId: "47943306919",
      appId: "1:47943306919:web:3a338ef36e8f4c0b581582"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
