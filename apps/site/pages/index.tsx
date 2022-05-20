import React from "react";
import { PuzzleIcon, DeviceMobileIcon } from "@heroicons/react/solid";

export default function Site() {
	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center">
			<div className="space-y-4 mx-auto container px-8">
				<div className="max-w-sm flex flex-col md:flex-row items-start md:items-center gap-4">
					<img
						src="/assets/svg/elsa-logo-colored-short.svg"
						className="w-auto h-16"
					/>
					<h2 className="text-3xl font-black">
						Designing Apps with Elsa.Health
					</h2>
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
					<a
						href="/components"
						className="px-2 py-3.5 border rounded-lg text-lg text-center bg-elsa-purple-600 hover:bg-elsa-purple-800 text-white inline-flex justify-center itece gap-3"
					>
						<PuzzleIcon className="w-auto h-7" />
						<label className="font-bold">Components</label>
					</a>
					<a
						href="/workflows"
						className="px-2 py-3.5 border-elsa-purple-500 group hover:border-elsa-purple-700 border-2 rounded-lg text-lg text-center text-white inline-flex justify-center itece gap-3"
					>
						<DeviceMobileIcon className="w-auto h-7 group-hover:text-elsa-purple-900 text-elsa-purple-500 " />
						<label className="font-bold group-hover:text-elsa-purple-900 text-elsa-purple-500">
							Screens
						</label>
					</a>
				</div>
			</div>
		</div>
	);
}
