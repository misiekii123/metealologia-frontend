import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public"

export async function load({ fetch }) {
    const OVERVIEW_URL = new URL("", env.PUBLIC_BACKEND_URI).href;
    let response;
    try {
        response = await fetch(OVERVIEW_URL)
    } catch (err) {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return content;
}
