const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const messages = require("./components/messages")
const meta = require("./components/meta")
const templates = require("./components/templates")

app.set("view engine", 'ejs')
app.use(express.static("public"))

app.get("/", (req, res) => {
	res.redirect("/join/")
})

app.get("/join/", (req, res) => {
	res.render("join", { meta: meta })
})

app.get("/join/:room", (req, res) => {
	res.render("join", { meta: meta })
})

app.get("/:room", (req, res) => {
	res.render("index", { meta: meta, room: req.params.room })
})


io.on("connection", (socket) => {
	socket.on("newUser", data => {
		socket.join(data.room)
		socket.to(data.room).broadcast.emit("announcement", messages.announcement(templates.userJoin(data.userName)))
	})

	socket.on("message", data => {
		socket.to(data.room).broadcast.emit("message", messages.message({ message:data.message, author: data.author}))
	})

	socket.on("disconnects", data => {
		socket.to(data.room).broadcast.emit("announcement", messages.announcement(templates.userLeft(data.userName)))
	})

})

const listener = server.listen(8080, () => console.log(`Running Server on port ${listener.address().port}`))