import {fetchStations} from "$lib/rest";

export async function load({fetch}) {
    return {stations: await fetchStations(fetch)};
}
