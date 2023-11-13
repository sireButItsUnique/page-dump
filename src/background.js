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
			"#testbranchpage":
				"https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab",
		},
	});

	let content = {};
	for (let i = 0; i < 20; i++) {
		content["page" + i] = {
			pageHash: "aaaa" + i,
			name: "page" + i,
		};
	}
	chrome.storage.local.set({
		directory: {
			"#root": {
				dirHash: "#root",
				name: "root",
				content: content,
				sub: {
					"#branch1": {
						dirHash: "#branch1",
						name: "branch1",
						content: {
							"#testbranchpage": {
								pageHash: "#testbranchpage",
								name: "testbranchpage",
							},
						},
						sub: {},
					},
					"#branch2": {
						dirHash: "#branch2",
						name: "branch2",
						content: {
							"#textbranchpage2": {
								pageHash: "#testbranchpage2",
								name: "testbranchpage2",
							},
						},
						sub: {},
					},
				},
			},
		},
	});
	chrome.storage.local.get(console.log);
});
