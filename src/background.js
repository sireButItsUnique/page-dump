async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.commands.onCommand.addListener(async (command) => {
	if (command === "save") {
		let tab = await getCurrentTab();
		console.log("saved " + tab.url);
	} else if (command === "random") {
		console.log("random");
	}
});
