import { Session, token_cookie } from '$lib/Data/session';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    let token = event.cookies.get(token_cookie);
    if (token) {
        event.locals.active_user = Session.fetch_token_user(token);
    }

	const response = await resolve(event);
	return response;
};