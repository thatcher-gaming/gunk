// See https://kit.svelte.dev/docs/types#app

import type { User } from "$lib/Data/user";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			active_user?: {id: string, handle: string},
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
