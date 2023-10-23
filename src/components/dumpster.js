import Folder from "./folder.js";

class Dumpster {
	state = {
		folders: [],
	};
	constructor() {
		// create dumpster
		this.wrapper = document.createElement("div");
		this.wrapper.className =
			"bg-dark-base rounded py-[2rem] pl-[2rem] pr-[1.1rem] overflow-y-scroll min-w-[16rem] max-w-[16rem] min-h-[24rem] max-h-[24rem] flex flex-wrap justify-start content-start";
		this.wrapper.id = "dumpster";

		// inject into dom
		document.getElementById("wrapper").appendChild(this.wrapper);

		// set up listeners
		this.state.folders.push(new Folder("dumpster"));
		chrome.storage.local.get(["cnt"]).then((res) => {
			while (res.cnt--) {
				this.state.folders.push(new Folder("dumpster"));
			}
		});

		chrome.storage.onChanged.addListener((changes, namespace) => {
			if (namespace == "local" && changes.cnt?.newValue) {
				chrome.storage.local.get(["cnt"]).then((res) => {
					this.state.folders.push(new Folder("dumpster"));
				});
			}
		});

		document.addEventListener("contextmenu", (e) => {
			for (let i = 0; i < this.state.folders.length; i++) {
				if (!this.state.folders[i].state.mouseOver) {
					this.state.folders[i].closeMenu();
				}
			}
		});
	}
}

export default Dumpster;
