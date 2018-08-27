// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = Cookie.get('authToken')
const userId = Cookie.get('receiverId')
const chatRoomId = Cookie.get('chatRoomId')


let chatMessage = {
  createdOn: Date.now(),
  receiverId: Cookie.get('receiverId'),//putting user2's id here 
  receiverName: Cookie.get('receiverName'),
  senderId: userId,
  senderName: data.senderName
}

let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message from " + data.senderName)
    console.log(data.message)

  });

  socket.on("online-user-list", (data) => {

    console.log("Online user list is updated. some user can online or went offline")
    console.log(data)

  });


  $("#send").on('click', function () {

    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    chatMessage.chatRoom = chatRoomId;
    socket.emit("chat-msg", chatMessage)

  })


  $("#createChatRoom").on('click', function () {

    //route to createRoom of ChatRoomController and pass the retrieved values to the next function

    let chatRoomDetails = {
      chatRoomTitle: 'Test',
      chatRoomLink: 'Test',
      userId: userId,
      userName: chatMessage.senderName,
    }

    socket.emit("create-chat-room", chatRoomDetails) // emit with the retrieve details

  })


  $("#joinChatRoom").on('click', function () {

    let chatRoomDetails = {
      userId: userId,
      userName: chatMessage.senderName,
      chatRoomId: chatRoomId
    }

    socket.emit("join-chat-room", chatRoomDetails) // emit with the retrieve details

  })

  $("#leaveChatRoom").on('click', function () {

    let chatRoomDetails = {
      userId: userId,
      userName: chatMessage.senderName,
      chatRoomId: chatRoomId
    }

    socket.emit("leave-chat-room", chatRoomDetails) // emit with the retrieve details

  })

  socket.on("leaved-chatroom", (data) => {

    console.log("User leaved from Chat Room.")
    console.log(data)

  });
  socket.on("created-chatroom", (data) => {

    console.log("User created the Chat Room.")
    console.log(data)

  });

  socket.on("joined-chatroom", (data) => {

    console.log("User joined the Chat Room.")
    console.log(data)

  });


  $("#messageToSend").on('keypress', function () {

    socket.emit("typing", chatMessage.senderName)

  })


  socket.on("typing", (data) => {

    console.log(data + " is typing")


  });



}// end chat socket function

chatSocket();
