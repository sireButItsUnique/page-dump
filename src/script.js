import Directory from "./components/Directory.js";
let heirarchy = {
	// [hash]: corresponding directory
	root: new Directory("root"),
};

chrome.storage.local.get(["directory"], ({ directory }) => {
	for (const key in directory.root.content) {
		heirarchy.root.addPage(directory.root.content[key]);
	}
});

heirarchy.root.display();
