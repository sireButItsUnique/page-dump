async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.commands.onCommand.addListener(async (command) => {
	if (command === "save") {
		let tab = await getCurrentTab();
		console.log("saved " + tab.url);

		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tab.id, { url: tab.url }, (res) => {});
		});
	}
});

chrome.runtime.onInstalled.addListener(() => {
	console.log("detected startup");
	chrome.storage.local.set({ cnt: 1 });
});
