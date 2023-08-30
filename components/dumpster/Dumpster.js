import Folder from "./Folder";
import Page from "./Page";

export default function Dumpster() {
	return (
		<div className="bg-dark-base rounded py-[2rem] pl-[2rem] pr-[1.1rem] overflow-y-scroll min-w-[16rem] max-w-[16rem] min-h-[24rem] max-h-[24rem] flex flex-wrap items-end">
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
			<Folder />
		</div>
	);
}
