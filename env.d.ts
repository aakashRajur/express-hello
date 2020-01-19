/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace NodeJS {
	// Merge the existing `ProcessEnv` definition with ours
	// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
	export interface ProcessEnv {
		HOSTNAME: string;
		PORT: string;
	}
}
