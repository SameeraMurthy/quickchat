let notificationBtn = document.querySelector("#notify")
notificationBtn.addEventListener("click", askNotificationPermission);
function checkNotificationPromise() {
		try {
		Notification.requestPermission().then();
		} catch(e) {
		return false;
		}

		return true;
  	}

function askNotificationPermission() {

  function handlePermission(permission) {
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
	  notify("Notifications are ON.", true)
    }
  }

  if (!('Notification' in window)) {
		console.log("Uh-Oh. Your browser doesn't support it! Go to https://browsehappy.com and upgrade your browser.")
		alert("Uh-Oh. Your browser doesn't support it! Go to https://browsehappy.com and upgrade your browser.")
  } else {
    Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
    })
  }
}

function notify (text, checker) {
	if (checker && checkNotificationPromise()) { 
		return new Notification('QuickChat', { body: text });
	}
}
