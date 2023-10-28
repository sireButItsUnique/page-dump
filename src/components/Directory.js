import Page from "./Page.js";
class Directory {
	state = {
		sub: {},
		content: [],
	};
	wrapper = document.createElement("div");

	display() {
		// inject into dom
		document.getElementById("wrapper").appendChild(this.wrapper);
	}

	addPage({ name, pageHash }) {
		let newPage = new Page(name, pageHash);
		this.wrapper.appendChild(newPage.wrapper);
		this.state.content.push(newPage);

		newPage.wrapper.addEventListener("closeAllMenus", () => {
			for (let i = 0; i < this.state.content.length; i++) {
				let page = this.state.content[i];
				if (page.state.hash != pageHash) {
					page.closeMenu();
				}
			}
		});
	}

	constructor(hash) {
		this.state.hash = hash;

		this.wrapper.className =
			"bg-dark-base rounded py-[2rem] pl-[2rem] pr-[1.1rem] overflow-y-scroll min-w-[16rem] max-w-[16rem] min-h-[24rem] max-h-[24rem] flex flex-wrap justify-start content-start";
		this.wrapper.id = "hash";
	}
}

export default Directory;
