import Page from "./Page.js";
import Folder from "./Folder.js";

class Directory {
	state = {
		sub: [],
		content: [],
	};
	wrapper = document.createElement("div");

	display() {
		// inject into dom
		console.log(this.state.content.length);
		for (let i = 0; i < this.state.sub.length; i++) {
			this.state.sub[i].setFadeDelay(i);
			this.wrapper.appendChild(this.state.sub[i].wrapper);
		}
		for (let i = 0; i < this.state.content.length; i++) {
			this.state.content[i].setFadeDelay(this.state.sub.length + i);
			this.wrapper.appendChild(this.state.content[i].wrapper);
		}
		document.getElementById("wrapper").appendChild(this.wrapper);
	}

	addPage({ name, pageHash }) {
		let newPage = new Page(name, pageHash);
		this.state.content.push(newPage);

		newPage.wrapper.addEventListener("closeAllMenus", () => {
			for (let i = 0; i < this.state.content.length; i++) {
				let page = this.state.content[i];
				if (page.state.hash != pageHash) {
					page.closeMenu();
				}
			}
			for (let i = 0; i < this.state.sub.length; i++) {
				let subdir = this.state.sub[i];
				subdir.closeMenu();
			}
		});
	}

	addSubdir({ name, dirHash }) {
		let newPage = new Folder(name, dirHash);
		this.state.sub.push(newPage);

		newPage.wrapper.addEventListener("closeAllMenus", () => {
			for (let i = 0; i < this.state.sub.length; i++) {
				let subdir = this.state.sub[i];
				console.log(subdir.state.hash);
				if (subdir.state.hash != dirHash) {
					subdir.closeMenu();
				}
			}
			for (let i = 0; i < this.state.content.length; i++) {
				let page = this.state.content[i];
				page.closeMenu();
			}
		});
	}

	constructor(name, hash) {
		this.state.hash = hash;

		this.wrapper.className =
			"bg-dark-base rounded py-[2rem] pl-[2rem] pr-[1.1rem] overflow-y-scroll min-w-[16rem] max-w-[16rem] min-h-[24rem] max-h-[24rem] flex flex-wrap justify-start content-start";
		this.wrapper.id = hash;
	}
}

export default Directory;
