
firebaseConfig = {
      apiKey: "AIzaSyCSF4OgD5otM6XYlGuRRqW_c1E6uzAmYh4",
      authDomain: "kwitter-cdd5e.firebaseapp.com",
      databaseURL: "https://kwitter-cdd5e-default-rtdb.firebaseio.com",
      projectId: "kwitter-cdd5e",
      storageBucket: "kwitter-cdd5e.appspot.com",
      messagingSenderId: "711946132947",
      appId: "1:711946132947:web:8b6a8a2bd87d6ad42c6326"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " +user_name+"!";

    function addRoom()
    {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name- "+Room_names);
row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
console.log("name");
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
