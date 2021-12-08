const firebaseConfig = {
    apiKey: "AIzaSyBVHOlxMiYZv2HGvX2dz8-mxtXLD-Vc_Ts",
    authDomain: "qwitter-9e273.firebaseapp.com",
    databaseURL: "https://qwitter-9e273-default-rtdb.firebaseio.com",
    projectId: "qwitter-9e273",
    storageBucket: "qwitter-9e273.appspot.com",
    messagingSenderId: "1027295148954",
    appId: "1:1027295148954:web:a4c6314f0ed5bacacc5823",
    measurementId: "G-PPJQK0JGHR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML=user_name;

  function addRoom(){
    room_name= document.getElementById("room_name").value ;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child("room_name").update({
      pupose: "adding room name"
    });
    window.location= "qwitter_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" +Room_names+"onclick=redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="qwitter_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}