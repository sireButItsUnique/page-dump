//Your background page can increment the value and store it via chrome.storage.local.set
//Your popup.js (a different script) can use chrome.storage.local.get on startup and chrome.storage.onChanged to detect the changes

function add(data) {
	let div = document.createElement("div");
	let label = document.createElement("h1");
	label.textContent = "bookmarking " + data;
	div.style.zIndex = 999;
	div.style.position = "fixed";
	div.style.top = "50%";
	div.style.left = "50%";
	div.style.transform = "translate(-50%, -50%)";
	div.style.backgroundColor = "#101519";
	div.style.borderRadius = "2px";
	div.style.paddingRight = "1rem";
	div.style.paddingLeft = "1rem";
	div.style.paddingTop = "0.5rem";
	div.style.paddingBottom = "0.5rem";
	label.style.color = "#2e7b94";
	label.style.fontSize = "1rem";
	label.style.fontFamily =
		"Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
	div.appendChild(label);
	document.body.appendChild(div);
}

chrome.storage.local.get(["saved"]).then((res) => {
	add(res.saved);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	if (namespace == "local" && changes.saved?.newValue) {
		chrome.storage.local.get(["saved"]).then((res) => {
			add(res.saved);
		});
	}
});
