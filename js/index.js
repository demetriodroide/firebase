let totalMessages = 0;

function initDatabase() {
  let GuardoConfigFireBase = {
    apiKey: "AIzaSyD_8OyzGwybYAPqhMFrs3CALfWeTUYzcl4",
    authDomain: "sioqloco-chat.firebaseapp.com",
    databaseURL: "https://sioqloco-chat.firebaseio.com",
    projectId: "sioqloco-chat",
    storageBucket: "sioqloco-chat.appspot.com",
    messagingSenderId: "963618369038",
    appId: "1:963618369038:web:879795cc35de9011fd165f",
  };
  // Initialize Firebase
  firebase.initializeApp(GuardoConfigFireBase);
}

function getMessages() {
  let database = firebase.database();
  let messagesRef = database.ref('messages/');

  // READ operation
  messagesRef.on('value', function(snapshot) {
    let messages = snapshot.val();

    console.log(messages);

    messages.map(function(messageObject) {
      writeMessage(messageObject.text);
    });
  });
}

function getMessagesOptimus() {
  firebase
    .database()
    .ref('messages/')
    .on('value', snapshot => {
      snapshot
        .val()
        .map(messageObject => {
          writeMessage(messageObject.text);
          totalMessages++;
        })
    });
}


function writeMessage(textMessage) {
  let textNode = document.createElement("p");
  textNode.innerText = textMessage;
  document.getElementById("messagesBox").appendChild(textNode);
}



function newMessage(textMessage) {
  let today = new Date();

  let messagesRef = firebase.database().ref('messages/');

  // WIP
  // messagesRef.set([...messagesRef, {
  //   currentdate: `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`,
  //   text: textMessage
  // }]);
}

initDatabase();
getMessagesOptimus();

document
  .getElementById("sendBtn")
  .addEventListener("click", function() {
    newMessage(document.getElementById("messageInput").value)
  });













