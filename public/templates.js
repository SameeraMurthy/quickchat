window.temp = {
	announcement: function(text) {
		return `<div class="text-center my-3"><i>${text}</i></div>`
	},
	self_message: function({message, author, time}) {
		return `<div class="message my-1" style="max-width: 18rem; margin-left: auto">
					<div class="card bg-primary text-black p-2 px-2">
						${message}
					</div>
					<div class="text-right"><small>${date(time)} &middot; ${author}</small></div>
				</div>`
	},
	message: function({message, author, time}) {
		return `<div class="message mb-2" style="max-width: 18rem;">
					<div class="card text-primary p-2 px-2">
						${message}
					</div>
					<div>&nbsp;<small>${date(time)} &middot; ${author}</small></div>
				</div>`
	}
}

const date = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}