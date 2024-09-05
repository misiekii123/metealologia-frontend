// /** @type {import('@sveltejs/kit').Handle} */
// export async function handle({ event, resolve }) {
//     console.log(event.url.href);
//     return await resolve(event);
// }

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event, status, message }) {
    if (status >= 500) {
        console.error(error);
    }

    return {message};
}