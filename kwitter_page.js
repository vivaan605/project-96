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
room_name = localStorage.getItem("room_name");
function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name: user_name,
message: msg,
like:0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}