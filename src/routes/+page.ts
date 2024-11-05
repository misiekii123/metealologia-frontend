import {fetchBackendMeta} from "$lib/rest";

export async function load({fetch}) {
    return await fetchBackendMeta(fetch);
}
