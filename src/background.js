async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.commands.onCommand.addListener(async (command) => {
	if (command === "save") {
		let tab = await getCurrentTab();
		console.log("saved " + tab.url);
	}
});

chrome.runtime.onInstalled.addListener(() => {
	console.log("detected startup");
	chrome.storage.local.set({
		storage: {
			aaaaa: "https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab",
			hiyaaaaa:
				"https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab",
		},
	});
	chrome.storage.local.set({
		directory: {
			root: {
				content: {
					page1: {
						pageHash: "aaaaa",
						name: "page1",
					},
					page2: {
						pageHash: "hiyaaaaa",
						name: "page2",
					},
				},
				sub: {},
			},
		},
	});
	chrome.storage.local.get(console.log);
});
