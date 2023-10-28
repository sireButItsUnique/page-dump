class Folder {
	state = {
		menuOpen: false,
		mouseOver: false,
		url: "https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab",
	};

	addListeners() {
		// closing/opening dropdown
		document.addEventListener("click", (e) => {
			if (this.state.menuOpen) {
				this.closeMenu();
			}
		});
		this.folder.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			if (!this.state.menuOpen) {
				this.openMenu();
			}
		});
		this.folder.addEventListener("click", (e) => {
			chrome.tabs.create({ url: this.state.url });
		});

		// relaying mouse state
		this.folder.addEventListener("mouseover", (e) => {
			this.state.mouseOver = true;
		});
		this.folder.addEventListener("mouseleave", (e) => {
			this.state.mouseOver = false;
		});
	}

	openMenu() {
		this.menu = document.createElement("div");
		this.menu.className =
			"bg-dark-contrast border-slate-400 border rounded left-[40%] top-[80%] px-[0.1rem] py-[0.25rem] absolute z-[10]";

		let trash = document.createElement("button");
		trash.innerText = "Delete";
		trash.className =
			"text-red-400 hover:bg-dark-pitch rounded-sm px-[0.4rem]";
		trash.addEventListener("click", (e) => {
			console.log("del button clciked");
			chrome.storage.local.get(["cnt"]).then((res) => {
				chrome.storage.local.set({ cnt: res.cnt - 1 });
			});
		});

		let rename = document.createElement("button");
		rename.innerText = "Rename";
		rename.className =
			"text-slate-500 hover:bg-dark-pitch rounded-sm px-[0.4rem]";

		this.menu.appendChild(rename);
		this.menu.appendChild(trash);
		this.folder.appendChild(this.menu);
		this.state.menuOpen = true;
	}

	closeMenu() {
		if (this.state.menuOpen) {
			this.folder.removeChild(this.menu);
			this.state.menuOpen = false;
		}
	}

	constructor(parentId) {
		// create folder
		this.wrapper = document.createElement("div");
		this.wrapper.className = "m-[0.5rem] flex flex-col justify-center";

		this.folder = document.createElement("button");
		this.folder.className =
			"min-h-[4.5rem] max-h-[4.5rem] min-w-[4.5rem] max-w-[4.5rem] p-[0.5rem] bg-dark-contrast box rounded grid relative";

		this.img = document.createElement("img");
		this.img.src = "./../public/images/folder.png";

		this.label = document.createElement("h1");
		this.label.className = "mt-[0.25rem] text-blue-base text-center";
		this.label.innerText = "Folder";

		// inject into dom
		this.folder.appendChild(this.img);
		this.wrapper.appendChild(this.folder);
		this.wrapper.appendChild(this.label);
		document.getElementById(parentId).appendChild(this.wrapper);
		this.addListeners();
	}
}

export default Folder;
