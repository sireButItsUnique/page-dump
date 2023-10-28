import Folder from "./[dep] folder.js";

class Dumpster {
	state = {
		folders: [],
	};

	addListeners() {
		// update folder count
		chrome.storage.onChanged.addListener(async (changes, namespace) => {
			if (namespace == "local" && changes.cnt?.newValue > -10) {
				let { cnt } = await chrome.storage.local.get(["cnt"]);
				console.log("cnt update recieved");
				while (this.state.folders.length > 0) {
					this.wrapper.removeChild(this.wrapper.firstChild);
					this.state.folders.length--;
				}
				while (cnt > 0) {
					this.state.folders.push(new Folder("dumpster"));
					cnt--;
				}
			}
		});

		// close all folders besides one being opened
		document.addEventListener("contextmenu", (e) => {
			for (let i = 0; i < this.state.folders.length; i++) {
				if (!this.state.folders[i].state.mouseOver) {
					this.state.folders[i].closeMenu();
				}
			}
		});
	}

	async init() {
		// gather how many folders to display
		let { cnt } = await chrome.storage.local.get(["cnt"]);
		while (cnt > 0) {
			this.state.folders.push(new Folder("dumpster"));
			cnt--;
		}
	}

	constructor() {
		// create dumpster
		this.wrapper = document.createElement("div");
		this.wrapper.className =
			"bg-dark-base rounded py-[2rem] pl-[2rem] pr-[1.1rem] overflow-y-scroll min-w-[16rem] max-w-[16rem] min-h-[24rem] max-h-[24rem] flex flex-wrap justify-start content-start";
		this.wrapper.id = "dumpster";

		// inject into dom
		document.getElementById("wrapper").appendChild(this.wrapper);
		this.addListeners();
		this.init();
	}
}

export default Dumpster;
