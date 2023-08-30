"use client";
import Dumpster from "./../components/dumpster/Dumpster";

export default function Home() {
	return (
		<div className="px-[2rem] py-[1rem] bg-dark-pitch">
			<div className="justify-center flex items-center mb-[0.5rem] overflow-x-hidden">
				<img src="/images/icon.png" width="100" height="100" />
				<h1 className="text-blue-base text-2xl font-extrabold mb-4">
					pageDump
				</h1>
			</div>
			<Dumpster />
		</div>
	);
}
