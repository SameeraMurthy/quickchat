exports.message = (message) => {
	if (message.trim() != "") {
		return message.replace(/</g, "&lt;").replace(/>/g, "&gt;")
	} else {
		return undefined
	}
}

exports.announce = (announcement) => {
	return announcement
}

exports.author = (name) => {
	return name
}