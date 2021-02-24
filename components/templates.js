module.exports = {
	userJoin: (userName) => {
		return `${userName} has joined the room.`
	},
	userLeft: (userName) => {
		return `${userName} has left the room.`
	}
}