import {error} from "@sveltejs/kit";

export async function load({ fetch }) {
    let response;
    try {
        response = await fetch("http://localhost:8080/stations")
    } catch {
        error(503, "Serwer nie odpowiada")
    }
    const content = await response.json()
    return {stations: content};
}
