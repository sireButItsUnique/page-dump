import Directory from "./components/Directory.js";

// format is [hash]: corresponding directory
let heirarchy = {
	"#root": new Directory("root", "#root"),
};
let active = heirarchy["#root"];

// recursively adds children of current directory
function rec(dir) {
	// adds content pages
	for (const key in dir.content) {
		heirarchy[dir.dirHash].addPage(dir.content[key]);
	}

	// adds sub dirs
	for (const key in dir.sub) {
		heirarchy[dir.dirHash].addSubdir(dir.sub[key]);
		heirarchy[key] = new Directory(dir.sub[key].name, key);
		rec(dir.sub[key]);
	}
}

chrome.storage.local.get(["directory"], ({ directory }) => {
	rec(directory["#root"]);
	heirarchy["#root"].display();
});

document.addEventListener("switchDirectory", (e) => {
	console.log("recieved");
	console.log(e);
	console.log(heirarchy);
	document.getElementById("wrapper").removeChild(active.wrapper);
	active = heirarchy[e.detail];
	active.display();
});
