const { v4: uuid } = require('uuid');
const parser = require("./parse");

module.exports = {
	announcement: (message, time) => {
		return {
			message: parser.announce(message),
			id: uuid()
		}
	},
	message: ({ message, author }) => {
		return {
			message: parser.message(message),
			id: uuid(),
			author: parser.author(author)
		}
	}
}