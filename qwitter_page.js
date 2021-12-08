const firebaseConfig = {
    apiKey: "AIzaSyBVHOlxMiYZv2HGvX2dz8-mxtXLD-Vc_Ts",
    authDomain: "qwitter-9e273.firebaseapp.com",
    databaseURL: "https://qwitter-9e273-default-rtdb.firebaseio.com",
    projectId: "qwitter-9e273",
    storageBucket: "qwitter-9e273.appspot.com",
    messagingSenderId: "1027295148954",
    appId: "1:1027295148954:web:a4c6314f0ed5bacacc5823",
    measurementId: "${config.measurementId}"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var room_name = localStorage.getItem('room_name');
  var user_name = localStorage.getItem('user_name');
function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}