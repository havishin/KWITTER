//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBZ18-IKyODVgOwrcJtA1gzyX_m96O8uYk",
      authDomain: "kwitter-b06cc.firebaseapp.com",
      databaseURL: "https://kwitter-b06cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-b06cc",
      storageBucket: "kwitter-b06cc.appspot.com",
      messagingSenderId: "760614037424",
      appId: "1:760614037424:web:77465654f3b06909465875"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['name'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function send()
{
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
