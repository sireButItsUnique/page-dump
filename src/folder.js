class Folder {
	constructor(parentId) {
		// create folder
		let div = document.createElement("div");
		div.className = "m-[0.5rem] flex flex-col justify-center";

		let folder = document.createElement("button");
		folder.className =
			"min-h-[4.5rem] max-h-[4.5rem] min-w-[4.5rem] max-w-[4.5rem] p-[0.5rem] bg-dark-contrast box rounded grid relative";

		let img = document.createElement("img");
		img.src = "./../public/images/folder.png";

		let label = document.createElement("h1");
		label.className = "mt-[0.25rem] text-blue-base text-center";
		label.innerText = "Folder";

		// add functionality
		folder.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			let menu = document.createElement("div");
			menu.className =
				"bg-dark-contrast border-slate-400 border rounded left-[40%] top-[80%] px-[0.1rem] py-[0.25rem] absolute z-[10]";

			let trash = document.createElement("button");
			trash.innerText = "Delete";
			trash.className =
				"text-red-400 hover:bg-dark-pitch rounded-sm px-[0.4rem]";

			let rename = document.createElement("button");
			rename.innerText = "Rename";
			rename.className =
				"text-slate-500 hover:bg-dark-pitch rounded-sm px-[0.4rem]";

			menu.appendChild(rename);
			menu.appendChild(trash);
			folder.appendChild(menu);
		});

		// inject into dom
		folder.appendChild(img);
		div.appendChild(folder);
		div.appendChild(label);
		document.getElementById(parentId).appendChild(div);
	}
}

export default Folder;
