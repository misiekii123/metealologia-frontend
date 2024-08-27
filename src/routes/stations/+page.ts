import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public"

export async function load({ fetch }) {
    const STATIONS_URL = new URL("stations", env.PUBLIC_BACKEND_URI).href;
    let response;
    try {
        response = await fetch(STATIONS_URL)
    } catch {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return {stations: content};
}
