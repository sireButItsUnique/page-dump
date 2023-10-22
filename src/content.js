chrome.runtime.onMessage.addListener((req, sender, res) => {
	// adding thing on background dom
	const { url } = req;
	let div = document.createElement("div");
	let label = document.createElement("h1");
	label.textContent = "bookmarking " + url;
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

	// api
	chrome.storage.local.set({ saved: url });
	chrome.storage.local.get(["cnt"]).then((res) => {
		chrome.storage.local.set({ cnt: res.cnt + 1 });
	});

	res({ result: "success" });
});
