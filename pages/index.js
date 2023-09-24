/*global chrome*/
"use client";
import Dumpster from "./../components/dumpster/Dumpster";
import { useEffect, useState } from "react";

export default function Home() {
	const [txt, setTxt] = useState("Test");

	return (
		<div className="px-[2rem] py-[1rem] bg-dark-pitch">
			<div className="justify-center flex items-center mb-[0.5rem] overflow-x-hidden">
				<img src="/images/icon.png" width="100" height="100" />
				<h1 className="text-blue-base text-2xl font-extrabold mb-4">
					pageDump
				</h1>
			</div>
			<button
				className="bg-white"
				onClick={() => {
					chrome.extension.getBackgroundPage().console.log("mounted");
					alert("mounted");
					setTxt("clicked");
				}}>
				{txt}
			</button>
			<Dumpster />
		</div>
	);
}
