chrome.runtime.onMessage.addListener((req, sender, res) => {
	// relaying message to local storage
	const { url } = req;
	chrome.storage.local.set({ saved: url });
	chrome.storage.local.get(["cnt"]).then((res) => {
		chrome.storage.local.set({ cnt: res.cnt + 1 });
	});

	res({ result: "success" });
});
