/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const now = new Date().toISOString().split(".")[0].replace("T", " ")
    const response = await resolve(event);
    console.log(`${now} access - "${event.request.method} ${event.url.pathname}" ${response.status}`)
    return response
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event, status, message }) {
    if (status >= 500) {
        console.error(error);
    }

    return {message};
}