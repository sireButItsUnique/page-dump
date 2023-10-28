async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.commands.onCommand.addListener(async (command) => {
	if (command === "save") {
		let tab = await getCurrentTab();
		console.log("saved " + tab.url);

		chrome.storage.local.set({ saved: tab.url });
		chrome.storage.local.get(["cnt"]).then((res) => {
			chrome.storage.local.set({ cnt: res.cnt + 1 });
		});
	}
});

chrome.runtime.onInstalled.addListener(() => {
	console.log("detected startup");
	chrome.storage.local.set({ cnt: 1 });
});
