class Page {
	state = {
		menuOpen: false,
	};

	// main elements
	wrapper = document.createElement("div");
	folder = document.createElement("button");
	img = document.createElement("img");
	label = document.createElement("h1");

	// menu elements
	trash = document.createElement("button");
	rename = document.createElement("button");
	menu = document.createElement("div");

	openMenu() {
		if (!this.state.menuOpen) {
			this.folder.appendChild(this.menu);
			this.state.menuOpen = true;
		}
	}

	closeMenu() {
		if (this.state.menuOpen) {
			this.folder.removeChild(this.menu);
			this.state.menuOpen = false;
		}
	}

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
	}

	constructor(name, hash) {
		// setting up state
		this.state.name = name;
		this.state.hash = hash;

		// setting up dom content
		this.wrapper.className = "m-[0.5rem] flex flex-col justify-center";
		this.wrapper.id = hash;
		this.folder.className =
			"min-h-[4.5rem] max-h-[4.5rem] min-w-[4.5rem] max-w-[4.5rem] p-[0.5rem] bg-dark-contrast box rounded grid relative";
		this.img.src = "./../public/images/folder.png";
		this.label.className = "mt-[0.25rem] text-blue-base text-center";
		this.label.innerText = name;

		this.menu.className =
			"bg-dark-contrast border-slate-400 border rounded left-[40%] top-[80%] px-[0.1rem] py-[0.25rem] absolute z-[10]";
		this.trash.innerText = "Delete";
		this.trash.className =
			"text-red-400 hover:bg-dark-pitch rounded-sm px-[0.4rem]";
		this.rename.innerText = "Rename";
		this.rename.className =
			"text-slate-500 hover:bg-dark-pitch rounded-sm px-[0.4rem]";

		// link elements tgt
		this.folder.appendChild(this.img);
		this.wrapper.appendChild(this.folder);
		this.wrapper.appendChild(this.label);
		this.menu.appendChild(this.rename);
		this.menu.appendChild(this.trash);

		this.addListeners();
	}
}

export default Page;
