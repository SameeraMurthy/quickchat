const room_input = document.querySelector("#room")
const user_input = document.querySelector("#userName")
const room = location.pathname.split("/").pop() != "join" ? location.pathname.split("/").pop() : ""

user_input.value = localStorage.getItem("userName") ?? "";

if (room != "") {
	room_input.value = room
	room_input.setAttribute("readonly", "")
}

document.querySelector("form#join").addEventListener("submit", (e) => {
	e.preventDefault()
	localStorage.setItem("userName", user_input.value)
	location.replace(location.origin + "/" + room_input.value)
})