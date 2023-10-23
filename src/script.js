import Folder from "./folder.js";

// handle events to create new folders
let folder = new Folder("dumpster");
chrome.storage.local.get(["cnt"]).then((res) => {
	while (res.cnt--) {
		let folder = new Folder("dumpster");
	}
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	if (namespace == "local" && changes.cnt?.newValue) {
		chrome.storage.local.get(["cnt"]).then((res) => {
			let folder = new Folder("dumpster");
		});
	}
});
