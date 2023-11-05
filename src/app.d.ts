// See https://kit.svelte.dev/docs/types#app

import type { Session } from "$lib/Data/session";
import 'unplugin-icons/types/svelte';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			active_user?: ReturnType<Session.fetch_token_user>,
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
