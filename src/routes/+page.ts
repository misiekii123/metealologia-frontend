import {error} from "@sveltejs/kit";

const OVERVIEW_URL = new URL("/", import.meta.env.VITE_BACKEND_ADDRESS).href

export async function load({ fetch }) {
    let response;
    try {
        response = await fetch(OVERVIEW_URL)
    } catch {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return content;
}