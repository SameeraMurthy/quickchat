const socket = io()
const room = location.pathname.split("/").pop()
const userName = localStorage.getItem("userName") ?? "???";
const chat = document.querySelector("#main .container")
socket.emit("newUser", {room, userName})
socket.on("connect_error", (err) => {
  console.log(err);
});

// if (checkNotificationPromise()) {
// 	notificationBtn.style.display = "none";
// }

socket.on("announcement", data => {
	chat.innerHTML += temp.announcement(data.message)
})

socket.on("message", (data) => {
	if (data.message) {
		chat.innerHTML += temp.message({
			message: data.message,
			author: data.author,
			time: new Date
		})

		notify(`${data.author}: ${data.message.substring(0, Math.min(data.message.length, 10))}`, document.hidden)
	}
	window.scrollTo(0,document.body.scrollHeight);
})

window.onunload = function(){
  return socket.emit("disconnects", {room, userName});
};


document.querySelector("#sendMessage").addEventListener("submit", (e) => {
	e.preventDefault()
	let payload = {
		message: document.querySelector("#message").value.trim(),
		author: userName,
		room: room,
		time: new Date
	}
	if (payload.message != "") {
		chat.innerHTML += temp.self_message(payload)
		delete payload.time
		socket.emit("message", payload)
		document.querySelector("#message").value = "";
		document.querySelector("#message").focus()
		window.scrollTo(-30,document.body.scrollHeight);
	}
	
})