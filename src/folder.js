function addFolder() {
	// create folder
	let folder = document.createElement("button");
	let img = document.createElement("img");
	folder.className =
		"m-[0.5rem] min-h-[4.5rem] max-h-[4.5rem] min-w-[4.5rem] max-w-[4.5rem] p-[0.5rem] bg-dark-contrast box rounded";
	img.src = "./../public/images/folder.png";

	// add functionality
	folder.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		let label = document.createElement("h1");
		label.innerText = "wtfdahkj";
		folder.appendChild(label);
	});

	// inject into dom
	folder.appendChild(img);
	document.getElementById("dumpster").appendChild(folder);
}

// handle events to create new folders
addFolder();
chrome.storage.local.get(["cnt"]).then((res) => {
	while (res.cnt--) {
		addFolder();
	}
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	if (namespace == "local" && changes.cnt?.newValue) {
		chrome.storage.local.get(["cnt"]).then((res) => {
			addFolder();
		});
	}
});
