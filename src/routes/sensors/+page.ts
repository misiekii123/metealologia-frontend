import {error} from "@sveltejs/kit";

const STATIONS_URL = new URL("/stations", import.meta.env.VITE_BACKEND_ADDRESS).href

export async function load({ fetch }) {
    let response;
    try {
        response = await fetch(STATIONS_URL)
    } catch {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return {stations: content};
}
